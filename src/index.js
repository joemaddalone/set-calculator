import React from "react";
import { createRoot } from "react-dom/client";
import { sets } from "./calc";
import Set from "./set";
import "./index.css";

const SetCalculator = () => {
  const [weight, setWeight] = React.useState(0);
  const [week, setWeek] = React.useState("5");
  const weightInput = React.useRef(null);
  const onChange = (e) => {
    setWeight(weightInput.current.value);
  };
  return (
    <div className="helvetica">
      <div className="form">
        <input
          type="number"
          onChange={onChange}
          ref={weightInput}
          className="pa2 input-reset"
          placeholder="training max"
        />

        {["5", "3", "1", "D"].map((w, i) => (
          <button
            className={`f6 pa2 ${w === week ? "bg-white " : ""}`}
            key={w}
            onClick={() => setWeek(w)}
          >
            {w === "D" ? "Deload" : `Week ${i + 1}`}
          </button>
        ))}
      </div>
      {weight ? (
        <div>
          {sets(weight, week).map((set, i) => (
            <Set key={i} set={set} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<SetCalculator />);
