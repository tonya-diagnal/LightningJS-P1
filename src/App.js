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
        color: 0xff000000,
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
        Outline: {
          x: 950,
          y: -10,
          w: 200,
          h: 600,
          shader: null,
          rect: true,
          colorLeft: 0xff000000,
          colorRight: 0x00000000,
          // shader: {
          //   type: Lightning.shaders.Outline,
          //   stroke: [50, 70],
          //   color: 0xff0000ff,
          // },
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
      showAndroidToast(data);
    }
  }

  _handleEnter() {
    let playData = { isClicked: true };
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid) {
      sendData(JSON.stringify(playData));
    }
    // console.log("key entered");
    // this.tag("Playbutton").text.text = "Search";
  }
}

function showAndroidToast(data) {
  Android.showPreviewPlayer(data.width, data.height);
}

function sendData(data) {
  Android.playMedia(data);
}
