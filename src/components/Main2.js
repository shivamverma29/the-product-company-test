import { useState, useEffect } from "react";

const Main2 = () => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [myStyle, setStyle] = useState({ left: x, top: y });
  const handleLeft = () => {
    if (x === 0) {
      return;
    } else {
      const newx = x - 50;
      setx(newx);
      console.log(x);
      setStyle({ left: x, top: y });
      console.log(myStyle);
    }
  };
  const handleRight = () => {
    if (x === 450) {
      return;
    } else {
      const newx = x + 50;
      setx(newx);
      console.log(x);
      setStyle({ left: x, top: y });
    }
  };
  const handleUp = () => {
    if (y === 0) {
      return;
    } else {
      const newy = y - 50;
      sety(newy);
      console.log(y);
      setStyle({ left: x, top: y });
      console.log(myStyle);
    }
  };
  const handleDown = () => {
    console.log("hi");
    if (y === 450) {
      return;
    } else {
      const newy = y + 50;
      sety(newy);
      console.log(y);
      setStyle({ left: x, top: y });
      console.log(myStyle);
    }
  };
  return (
    <div className="main_container">
      <button className="horizontal" onClick={handleUp}>
        Up
      </button>
      <div className="container">
        <button className="vertical" onClick={handleLeft}>
          Left
        </button>
        <div className="main">
          <div className="box" style={{ left: x, top: y }}></div>
        </div>
        <button className="vertical" onClick={handleRight}>
          Right
        </button>
      </div>
      <button className="horizontal" onClick={handleDown}>
        Down
      </button>
    </div>
  );
};

export default Main2;
