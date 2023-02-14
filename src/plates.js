import React from "react";
const Plates = ({ plates }) => {
  return (
    <div className="flex items-center" style={{ height: 100 }}>
      {plates.map((plate, i) => (
        <div
          className="flex items-center justify-center ba pa2 plate"
          key={i}
        >
          {plate}
        </div>
      ))}
    </div>
  );
};

export default Plates;
