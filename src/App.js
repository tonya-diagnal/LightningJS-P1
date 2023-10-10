import { Lightning, Utils } from "@lightningjs/sdk";

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
        Playbutton: {
          // rect: true,
          src: Utils.asset("/images/play.png"),
          zIndex: 99,
          shader: null,
          // color: 0xff000000,
          w: 100,
          h: 100,
          y: 270,
          x: 1440,
          mount: 0.5,
        },
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

  _handleEnter() {
    let playData = { isClicked: true };
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
      senData(JSON.stringify(playData));
    }
    // console.log("key entered");
    // this.tag("Playbutton").text.text = "Search";
  }
}

function showAndroidToast(toast) {
  Android.showToast(toast);
}

function senData(data) {
  Android.playMedia(data);
}
