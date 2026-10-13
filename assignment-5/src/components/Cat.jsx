import React from "react";
import { useState } from "react";

const Cat = () => {
    const [row, setRow] = useState(300);
    const [col, setCol] = useState(300);

    
    const rowinc = () => {
        setRow(row + 20);
    }
       const rowdec = () => {
         setRow(row - 20);
    };
       const colinc = () => {
         setCol(col + 20);
    };
       const coldec = () => {
         setCol(col - 20);
       };
  return (
    <div style={{ border: "2px solid red", height: "600px", width: "600px" }}>
      <img
        src="https://tse2.mm.bing.net/th/id/OIP._d8RfHVRWwXudBHr4WjSxgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="cat-image"
        style={{
          height: `${row}px`,
          width: `${col}px`,
        }}
      />
    <br />
      <button onClick={rowinc}>ROW+</button>
      <button onClick={rowdec}>ROW -</button>
      <br />
      <button onClick={colinc}>COL +</button>
      <button onClick={coldec}>COL -</button>
      <br />
    </div>
  );
}
export default Cat