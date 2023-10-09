import { Lightning } from "@lightningjs/sdk";

let HOLE_W = 960;
let HOLE_H = 540;

export default class App extends Lightning.Component {
  static _template() {
    return {
      Container: {
        x: 0,
        y: 0,
        w: 1920,
        h: 1080,
        color: 0xffff0000,
        rect: true,
        shader: {
          type: Lightning.shaders.Hole,
          w: HOLE_W,
          h: HOLE_H,
          x: 960,
          y: 0,
        },
      },
    };
  }

  _init() {
    let data = {
      width: this.tag("Container").shader.w,
      height: this.tag("Container").shader.h,
    };
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
      showAndroidToast(JSON.stringify(data));
    }
  }
}

function showAndroidToast(toast) {
  Android.showToast(toast);
}
