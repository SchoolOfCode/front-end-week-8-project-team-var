import React, { useEffect, useState, useRef } from "react";
import UseEventListener from "../UseEventListener/UseEventListener";
let ctx;
let c;
function Signature() {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const [image, setImage] = useState();
  console.log("Signature Image in base64: ", image);

  useEffect(() => {
    c = canvasRef.current;
    ctx = c.getContext("2d");
  }, []);

  function draw(x, y) {
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    ctx.moveTo(x, y);
    setImage(c.toDataURL("image/png"));
  }

  UseEventListener("mousedown", ({ clientX, clientY }) => {
    const { x, y } = canvasRef.current.getBoundingClientRect();
    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(clientX - x, clientY - y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
  });
  UseEventListener("mouseup", () => {
    setIsDrawing(false);
  });
  UseEventListener("mousemove", ({ x: clientX, y: clientY }) => {
    const { x, y } = canvasRef.current.getBoundingClientRect();
    if (isDrawing) {
      draw(clientX - x, clientY - y);
    }
  });
  function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 1000);
  }
  return (
    <>
      <canvas
        style={{ border: "1px solid black", backgroundColor: "white" }}
        id="canvas"
        height={100}
        width={400}
        ref={canvasRef}
      ></canvas>
      <button onClick={clearCanvas}>Clear</button>
    </>
  );
}
export default Signature;
