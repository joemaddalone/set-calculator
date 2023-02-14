import React from "react";
import Plates from "./plates";

const Set = ({ set }) => {
  return (
    <div className="flex set">
      <div className="flex items-center justify-center w-25">
        <ruby className="css over">
          {set.weight}
          <rt>Weight</rt>
        </ruby>
      </div>
      <div className="flex items-center justify-center w-25">
        <ruby className="css over">
          {set.reps}
          <rt>Reps</rt>
        </ruby>
      </div>
      <div className="flex items-center w-50">
        <Plates plates={set.plates} />
      </div>
    </div>
  );
};

export default Set;
