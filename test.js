const string = `
/*开始画个皮卡丘，点击按钮控制速度*/
      .skin * {box-sizing: border-box;
margin: 0px;
        padding: 0px;
      }
      .skin *::before,
      .skin *::after {
        box-sizing: border-box;
      }
      .skin {
        position: relative;
        background: #ffe600;
        bottom: 50%;
      }
/*先画鼻子*/

.nose {
  position: relative;
  left: 50%;
  top: 248px;
  width: 50px;
  margin-left: -25px;
}
  .san {
        border: 10px solid red;
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        margin-left: -10px;
        border-color: black transparent black transparent;
        border-bottom: none;
      }

/*再画眼睛*/
.eye {
  
  border: 2px solid black;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 200px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
  position: absolute;
}
.eye::before {
  content: "";
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  background: white;
  right: 40%;
  border-radius: 50%;
  border: 2px solid black;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
/*嘴巴*/
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 270px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
}
.mouth .up .lip {
  position: absolute;
  border: 4px solid black;
  width: 100px;
  height: 30px;
  background: #ffe600;
  z-index: 1;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  border-top: transparent;
  border-right: transparent;
  transform: rotate(-20deg);
}

.mouth .up .lip.right {
  left: 50%;

  border-radius: 0px 0px 50px 0px;
  border-top: transparent;
  border-left: transparent;
  transform: rotate(20deg);
}
.mouth .down {
  position: absolute;
  top: 7px;
  width: 100%;

  overflow: hidden;
  height: 200px;
}
.mouth .down .circle2 {
  border: 4px solid black;
  width: 160px;
  left: 50%;
  margin-left: -80px;
  height: 700px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  border-radius: 90px/380px;
  background: #9b000a;
}
.mouth .down .circle2 .circle3 {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ff4760;
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
/*脸颊*/
.face {
  border: 3px solid black;
  width: 88px;
  height: 88px;
  left: 50%;
  top: 320px;
  position: relative;
  border-radius: 50%;
  background: red;
  z-index: 1;

}

.face.right {
  position: absolute;
  margin-left: 120px;
}
.face.left {
  position: absolute;
  margin-left: -208px;
}
/* 摸摸它的鼻子~ */
 `;
let n = 1;
demo2.innerHTML = string.substr(0, n);
demo.innerText = string.substr(0, n);
let speed = 100;
const x = () => {
  n += 1;
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};
let id = setInterval(x, speed);

const play = () => {
  return setInterval(x, speed);
};
const pause = () => {
  window.clearInterval(id);
};

var btPause = document.getElementById("btPause");
var isGo = false; //开始停止的标志
btPause.onclick = function () {
  if (isGo) {
    btPause.innerText = "慢速";
    pause();
    speed = 50;
    id = play();
  } else {
    btPause.innerText = "快速";
    pause();
    speed = 0;
    id = play();
  }
  isGo = !isGo; //按钮冲突改变
};
