import React, { useEffect } from "react";

function Signature() {
  const canvasRef = useRef(null);
  useEffect(() => {
    var canvas = document.getElementById("signCanvas");
    var ctx = canvas.getContext("2d");

    var img = canvas.toDataURL("image/png");

    let isDrawing = false;
    function getMousePos(canvas, event) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    }
    canvas.addEventListener("mousedown", () => {
      isDrawing = true;
      let mousePos = getMousePos(canvas, event);
      Draw(mousePos.x, mousePos.y, isDrawing);
    });
    canvas.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    canvas.addEventListener("mousemove", () => {
      let mousePos = getMousePos(canvas, event);
      Draw(mousePos.x, mousePos.y, isDrawing);
    });
    function Draw(x, y, isDrawing) {
      if (isDrawing) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
      }
      lastX = x;
      lastY = y;
    }
    document.write('<img src="' + img + '"/>');
  }, []);

  return <canvas id="canvas" height="200" width="400" ref="canvasRef"></canvas>;
}

export default Signature;
