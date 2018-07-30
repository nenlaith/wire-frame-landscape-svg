import WireFrameLandscape from './wireFrameLandscape.js';

function create(wrapper_id, number_of_point, framerate = 4, background_color = "#FFFFFF", wire_color = "#FF0000") {
  let wfl = new WireFrameLandscape(wrapper_id, number_of_point, framerate);
  wfl.set_colors(background_color, wire_color);
  return wfl;
}

export {
  create
};
