import React from "react";
const Plates = ({ plates }) => {
  return (
    <div class="flex items-center" style={{ height: 100 }}>
      {plates.map((plate, i) => (
        <div
          class="flex items-center justify-center ba pa2 plate"
          key={i}
        >
          {plate}
        </div>
      ))}
    </div>
  );
};

export default Plates;
