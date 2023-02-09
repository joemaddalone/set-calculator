import React from "react";
import Plates from "./plates";

const Set = ({ set }) => {
  return (
    <div class="flex bt set">
      <div class="flex items-center justify-center w-25">
        <ruby class="css over">
          {set.weight}
          <rt>Weight</rt>
        </ruby>
      </div>
      <div class="flex items-center justify-center w-25">
        <ruby class="css over">
          {set.reps}
          <rt>Reps</rt>
        </ruby>
      </div>
      <div class="flex items-center w-50">
        <Plates plates={set.plates} />
      </div>
    </div>
  );
};

export default Set;
