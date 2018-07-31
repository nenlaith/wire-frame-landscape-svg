class Color {
  constructor(hue, saturation, lightness) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }

  get_HSL() {
    return [ this.hue, this.saturation, this.lightness ];
  }

  get_RGB() {
    return Color.from_HSL_to_RGB(this.hue, this.saturation, this.lightness);
  }

  static trans_int_to_hex(int) {
    let coucou = Math.round(int * 255).toString(16);
    if (coucou.length == 0)
      return "00";
    else if (coucou.length == 1)
      return "0" + coucou;
    return coucou;
  }

  get_RGB_HTML() {
    let rgb = this.get_RGB();
    return "#" + Color.trans_int_to_hex(rgb[0]) + Color.trans_int_to_hex(rgb[1]) + Color.trans_int_to_hex(rgb[2]);
  }

  static get_RGB_HTML_from_RGB() {
    const rgb = Color.get_RGB_from_representation.apply(null, arguments);
    if (rgb === null) {
      return null;
    }
    return "#" + Color.trans_int_to_hex(rgb[0]) + Color.trans_int_to_hex(rgb[1]) + Color.trans_int_to_hex(rgb[2]);
  }

  static create_from_HSL() {
    let hsl = Color.get_HSL_from_representation.apply(null, arguments);
    if (hsl === null) {
      return null;
    }
    return new Color(hsl[0], hsl[1], hsl[2]);
  }

  static create_from_RGB() {
    let hsl = Color.from_RGB_to_HSL.apply(null, arguments);
    if (hsl === null) {
      return null;
    }
    return new Color(hsl[0], hsl[1], hsl[2]);
  }

  static from_RGB_to_HSL() {
    const rgb = Color.get_RGB_from_representation.apply(null, arguments);
    if (rgb === null) {
      return null;
    }
    const red = rgb[0], green = rgb[1], blue = rgb[2];

    const M = Math.max(red, green, blue);
    const m = Math.min(red, green, blue);
    const C = M - m;

    const hue_prime = (function () {
      if (C === 0.0)
        return 0;
      else if (M === red)
        return ( ( green - blue ) / C ) % 6;
      else if (M === green)
        return ( ( blue - red ) / C ) + 2;
      else if (M === blue)
        return ( ( red - green ) / C ) + 4;
    })();
    const hue = hue_prime < 0 ? 360 + hue_prime * 60 : hue_prime * 60;
    const lightness = 1 / 2 * ( M + m );
    const saturation = (function () {
      if (lightness === 1)
        return 0;
      else
        return C / ( 1 - Math.abs( 2 * lightness - 1) );
    })();

    return [ hue, saturation, lightness ];
  }

  static from_HSL_to_RGB() {
    const hsl = Color.get_HSL_from_representation.apply(null, arguments);
    if (hsl === null) {
      return null;
    }

    const hue = hsl[0], saturation = hsl[1], lightness = hsl[2];

    const C = ( 1 - Math.abs( 2 * lightness - 1 ) ) * saturation;
    const hue_prime = hue / 60;
    const X = C * ( 1 - Math.abs( ( hue_prime % 2 ) - 1 ) );
    const rgb_one = (function () {
      if (0 <= hue_prime && hue_prime <= 1)
        return [ C, X, 0 ];
      else if ( 1 <= hue_prime && hue_prime <= 2 )
        return [ X, C, 0 ];
      else if ( 2 <= hue_prime && hue_prime <= 3 )
        return [ 0, C, X ];
      else if ( 3 <= hue_prime && hue_prime <= 4 )
        return [ 0, X, C ];
      else if ( 4 <= hue_prime && hue_prime <= 5 )
        return [ X, 0, C ];
      else if ( 5 <= hue_prime && hue_prime <= 6 )
        return [ C, 0, X ];
    })();
    const m = lightness - ( 1.0 / 2.0 * C );
    const red = rgb_one[0] + m, green = rgb_one[1] + m, blue = rgb_one[2] + m;

    return [ red, green, blue ];
  }

  static get_HSL_from_representation() {
    if (arguments.length === 3 && typeof(arguments[0]) === "number"
    && typeof(arguments[1]) === "number" && typeof(arguments[2]) === "number"
    && arguments[0] <= 360 && arguments[1] <= 1.0 && arguments[2] <= 1.0) {
      return [ arguments[0], arguments[1], arguments[2] ];
    }
    else if (arguments.length === 1 && Array.isArray(arguments[0])
    && typeof(arguments[0][0]) === "number" && typeof(arguments[0][1]) === "number"
    && typeof(arguments[0][2]) === "number" && arguments[0][0] <= 360
    && arguments[0][1] <= 1.0 && arguments[0][2] <= 1.0) {
      return [ arguments[0][0], arguments[0][1], arguments[0][2] ];
    }
    return null;
  }

  static get_RGB_from_representation() {
    if (arguments.length === 1 && typeof(arguments[0]) === "string") {
      let str = arguments[0];
      return [
        parseInt("0x" + str.substring(1, 3)) / 255,
        parseInt("0x" + str.substring(3, 5)) / 255,
        parseInt("0x" + str.substring(5, 7)) / 255
      ];
    }
    else if (arguments.length === 3 && typeof(arguments[0]) === "number"
    && typeof(arguments[1]) === "number" && typeof(arguments[2]) === "number"
    && arguments[0] <= 1.0 && arguments[1] <= 1.0 && arguments[2] <= 1.0) {
      return [ arguments[0], arguments[1], arguments[2] ];
    }
    else if (arguments.length === 3 && Number.isInteger(arguments[0])
    && Number.isInteger(arguments[1]) && Number.isInteger(arguments[2])
    && arguments[0] <= 255 && arguments[1] <= 255 && arguments[2] <= 255) {
      return [ arguments[0] / 255, arguments[1] / 255, arguments[2] / 255 ];
    }
    else if (arguments.length === 1 && Array.isArray(arguments[0])
    && typeof(arguments[0][0]) === "number" && typeof(arguments[0][1]) === "number"
    && typeof(arguments[0][2]) === "number" && arguments[0][0] <= 1.0
    && arguments[0][1] <= 1.0 && arguments[0][2] <= 1.0) {
      return [ arguments[0][0], arguments[0][1], arguments[0][2] ];
    }
    else if (arguments.length === 1 && Array.isArray(arguments[0])
    && Number.isInteger(arguments[0][0]) && Number.isInteger(arguments[0][1])
    && Number.isInteger(arguments[0][2]) && arguments[0][0] <= 255
    && arguments[0][1] <= 255 && arguments[0][2] <= 255) {
      return [ arguments[0][0] / 255, arguments[0][1] / 255, arguments[0][2] / 255 ];
    }
    return null;
  }
}

export default Color;
