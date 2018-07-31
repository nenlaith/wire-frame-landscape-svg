import * as WFL from './index.js';

let wfl = WFL.create("canvas-wrapper", 20, 10, "#FFFFFF", "#0496FF");

setTimeout(function () {
  wfl.animate_colors("#FF00FF", "#006BA6");
}, 1000);
