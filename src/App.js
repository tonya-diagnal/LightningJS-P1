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

        // HolePunch: {
        shader: {
          type: Lightning.shaders.Hole,
          // w: 800,
          // h: 550,
          w: HOLE_W,
          h: HOLE_H,
          x: 960,
          y: 0,
        },
        // },
      },
      // },
    };
  }

  // _init() {
  //   const canvas = this.stage.getCanvas();
  //   canvas.style.backgroundColor = "0x00000000";
  // }
  _init() {
    let data = {
      width: this.tag("Container").shader.w,
      height: this.tag("Container").shader.h,
    };
    showAndroidToast(JSON.stringify(data));
    // console.log(this.tag("Container").shader.h);
    // showAndroidToast("hi how are you");
    // this.tag("HolePunch")
  }
}

// const App = new BasicUsageExample({
//   stage: { w: window.innerWidth, h: window.innerHeight, useImageWorker: false },
// });
// document.body.appendChild(App.stage.getCanvas());
function showAndroidToast(toast) {
  Android.showToast(toast);
}
