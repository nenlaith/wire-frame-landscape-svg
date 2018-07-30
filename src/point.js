import Link from './link.js';

class Point {

  constructor(x, y, from, to, framerate) {
    this.x = x;
    this.y = y;
    this.links = [];

    this.frames = [];
    let multiplier = Math.random() * (to - from) - from;
    let translate = Math.random() * (2 * Math.PI - 0) - 0;
    for (let i = 0; i <= framerate; ++i) {
      let coucou = ( ( i / framerate ) * 2 * Math.PI + translate ) % (2 * Math.PI);
      this.frames.push(Math.cos(coucou) *  multiplier);
    }
  }

  set_position(cx, cy) {
    this.cx = cx;
    this.cy = cy;
  }

  link_to(point) {
    return new Link(this, point);
  }

  add_link(link) {
    this.links.push(link);
  }

  get_empty_links() {
    let empty_links = [];
    for (let i = 0; i < this.links.length; ++i) {
      if (!this.links[i].is_used()) {
        empty_links.push(this.links[i]);
      }
    }
    return empty_links;
  }

  get_unvisited_link() {
    for (let i = 0; i < this.links.length; ++i) {
      if (!this.links[i].is_used()) {
        return this.links[i];
      }
    }
    return null;
  }

  get_frame(number) {
    return "" + this.cx + "," + (this.cy + this.frames[number]);
  }

  to_string() {
    return "[" + this.x + ", " + this.y + "]";
  }
}

export default Point;
