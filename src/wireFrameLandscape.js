import ResizeSensor from './resizeSensor.js';
import Point from './point.js';
import Link from './link.js';
import Color from './color.js';

class WireFrameLandscape {

  constructor(id_wrapper, number_of_point, framerate) {
    this.number_of_point = number_of_point;
    this.distance = 50;
    this.length_multipier = 1.5;
    this.min_amplitude = -2;
    this.max_amplitude = 2;
    this.framerate = framerate;

    this.wrapper = document.getElementById(id_wrapper);
    this.create_elements();
    this.set_svg_size();

    if (number_of_point % 2 != 0) {
      throw new Error("the number of point is not even");
    }

    let points = this.create_points(number_of_point, this.framerate);
    this.set_position_points(points);
    let grid = this.generate_links(points);
    let path = this.generate_path(grid);
    this.display(path, this.framerate);

    const $this = this;
    ResizeSensor.create(this.wrapper, function () {
      $this.set_svg_size();
      $this.set_position_points(points);
      $this.display(path, $this.framerate);
    });
  }

  create_points(number_of_point, framerate) {
    let from, to;
    let points = new Array(number_of_point);

    for (let j = 0; j < number_of_point; ++j) {
      points[j] = new Array(number_of_point);
      for (let i = 0; i < number_of_point; ++i) {
        if (i == 0  || i == (number_of_point - 1) || j == 0 || j == (number_of_point - 1)) {
          from = to = 0;
        } else {
          from = this.min_amplitude;
          to = this.max_amplitude;
        }
        points[j][i] = new Point(i, j, from, to, framerate);
      }
    }
    return points;
  }

  set_position_points(points) {
    let number_of_point = points[0].length;
    let cx, cy, rot_cx, rot_cy;
    let width = this.getWidth() * this.length_multipier, height = this.getHeight() * this.length_multipier;
    let screen_mid_x = this.getWrapperWidth() / 2.0, screen_mid_y = this.getWrapperHeight() / 2.0;
    let matrix = this.create_matrix(Math.PI / 4);

    const translate = 0;

    for (let j = 0; j < number_of_point; ++j) {
      for (let i = 0; i < number_of_point; ++i) {
        cx = ((i / (number_of_point - 1)) * width) - (width / 2.0);
        cy = ((j / (number_of_point - 1)) * height) - (height / 2.0);
        rot_cx = cx * matrix[0][0] + cy * matrix[0][1];
        rot_cy = cx * matrix[1][0] + cy * matrix[1][1];
        points[j][i].set_position(rot_cx + screen_mid_x + translate, rot_cy + screen_mid_y + translate);
      }
    }
  }

  generate_links(points) {
    let number_of_point = points.length;
    let links = [];

    for (let j = 0; j < number_of_point; ++j) {
      for (let i = 0; i < number_of_point; ++i) {
        if (j < number_of_point - 1) {
          links.push(points[j][i].link_to(points[j + 1][i]));
        }
        if (i < number_of_point - 1) {
          links.push(points[j][i].link_to(points[j][i + 1]));
        }
      }
    }

    let indices = [ 0, number_of_point - 1 ];
    for (let m = 0; m < indices.length; ++m) {
      for (let o = 1; o < number_of_point / 2.0; ++o) {
        links.push(points[indices[m]][o].link_to(points[indices[m]][number_of_point - 1 - o]));
      }
    }

    for (let m = 0; m < indices.length; ++m) {
      for (let o = 1; o < number_of_point / 2.0; ++o) {
        links.push(points[o][indices[m]].link_to(points[number_of_point - 1 - o][indices[m]]));
      }
    }

    return points;
  }

  generate_path(grid) {
    let start_point = grid[0][0];
    let start_point_index = 0;
    let path = [ start_point ];
    let current_point;
    let sub_path;
    let link;

    while (start_point != null) {
      sub_path = [];
      current_point = start_point;
      do {
        link = current_point.get_unvisited_link();
        current_point = link.start === current_point ? link.end : link.start;
        link.use();
        sub_path.push(current_point);
      } while (current_point !== start_point);

      for (let i = 0; i < sub_path.length; ++i) {
        path.splice(start_point_index + i + 1, 0, sub_path[i]);
      }

      start_point = null;
      for (let i = 0, good = false; !good && i < path.length; ++i) {
        if (path[i].get_unvisited_link() !== null) {
          start_point = path[i];
          start_point_index = i;
          good = true;
        }
      }
    }
    return path;
  }

  display(path, framerate) {
    this.animation_polyline.setAttribute("from", this.create_frame(path, 0));
    this.animation_polyline.setAttribute("to", this.create_frame(path, framerate));
    let keyTimes = "";
    let values = "";
    let sep = "";

    for (let i = 0; i <= framerate; ++i) {
      sep = i === framerate ? "" : ";";
      keyTimes += i / framerate + sep;
      values += this.create_frame(path, i) + sep;
    }

    this.animation_polyline.setAttribute("keyTimes", keyTimes);
    this.animation_polyline.setAttribute("values", values);
  }

  create_svg_node(name, attrs) {
    let element = document.createElementNS("http://www.w3.org/2000/svg", name);
    let keys = Object.keys(attrs);

    for (let i = 0; i < keys.length; ++i) {
      element.setAttribute(keys[i], attrs[keys[i]]);
    }

    return element;
  }

  create_frame(path, frame_number) {
    let frame = "";

    for (let i = 0; i < path.length; ++i) {
      frame += path[i].get_frame(frame_number) + (i <= path.length - 1 ? " " : "");
    }

    return frame;
  }

  create_matrix(theta) {
    return [
      [ Math.cos(theta), -1 * Math.sin(theta) ],
      [ Math.sin(theta), Math.cos(theta) ]
    ];
  }

  set_colors(background_color, wire_color) {
    this.rect.setAttribute("fill", background_color);
    this.polyline.setAttribute("stroke", wire_color);
  }

  animate_colors(background_color, wire_color, time = 0.4) {
    const $this = this;

    let to_background = Color.get_RGB_from_representation(background_color);
    let to_wire = Color.get_RGB_from_representation(wire_color);
    let from_background = Color.get_RGB_from_representation(this.rect.getAttribute("fill"));
    let from_wire = Color.get_RGB_from_representation(this.polyline.getAttribute("stroke"));
    let back = [], wire = [];

    for (let i = 0; i < 3; ++i) {
      back.push(to_background[i] - from_background[i]);
      wire.push(to_wire[i] - from_wire[i]);
    }
    let date = null;
    let interval_key = null;
    let frac;

    interval_key = setInterval(function () {
      let current = Date.now();
      if (date === null)
        date = current;
      else if (current - date >= time * 1000) {
        clearInterval(interval_key);
        current = time * 1000 + date;
      }

      frac = ( current - date ) / (time * 1000);

      $this.rect.setAttribute("fill", Color.get_RGB_HTML_from_RGB(back.map(function (item) {
        return item * frac
      }).map(function (item, index) {
        return item + from_background[index];
      })));

      $this.polyline.setAttribute("stroke", Color.get_RGB_HTML_from_RGB(wire.map(function (item) {
        return item * frac
      }).map(function (item, index) {
        return item + from_wire[index];
      })));

    }, 33);
  }

  create_elements() {
    this.element = this.create_svg_node("svg", {
      "version": "1.1"
    });

    this.rect = this.create_svg_node("rect", {
      "fill": "cyan",
      "width": "100%",
      "height": "100%"
    });

    this.polyline = this.create_svg_node("polyline", {
      "stroke": "red",
      "stroke-width": "3",
      "fill": "none"
    });

    this.animation_polyline = this.create_svg_node("animate", {
      "attributeName": "points",
      "dur": "5s",
      "repeatCount": "indefinite"
    });

    this.polyline.appendChild(this.animation_polyline);
    this.element.appendChild(this.rect);
    this.element.appendChild(this.polyline);
    this.wrapper.appendChild(this.element);
  }

  set_svg_size() {
    this.element.setAttribute("viewBox", "0 0 " + ( this.getWrapperWidth() ) + " " + ( this.getWrapperHeight() ));
    this.element.setAttribute("width", "" + this.getWrapperWidth() + "px");
    this.element.setAttribute("height", "" + this.getWrapperHeight() + "px");
  }

  getWrapperWidth() {
    return this.wrapper.offsetWidth;
  }

  getWrapperHeight() {
    return this.wrapper.offsetHeight;
  }

  getWidth() {
    const width = this.getWrapperWidth();
    const height = this.getWrapperHeight();
    return width > height ? width : height;
  }

  getHeight() {
    const width = this.getWrapperWidth();
    const height = this.getWrapperHeight();
    return width > height ? width : height;
  }
}

export default WireFrameLandscape;
