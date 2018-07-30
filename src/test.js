import * as WFL from './index.js';

let wfl = WFL.create("canvas-wrapper", 20, 10, "#FFFFFF", "#0496FF");

setTimeout(function () {
  wfl.animate_colors("#D81159", "#FFBC42");
}, 1000);
