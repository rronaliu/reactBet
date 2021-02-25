import React, { useState } from "react";

const Fulltime = () => {
  const [overUnder, setOverUnder] = useState(false);

  console.log(overUnder);
  return (
    <div
      className="px-4 py-2 d-flex justify-content-between text-white"
      style={{ background: "#303030" }}
    >
      <h3>Soccer</h3>
      <select
        name="Fulltime Results"
        id="Fulltime"
        className="text-white"
        style={{ background: "#303030", border: "0px", outline: "0px" }}
        onSelect={() => setOverUnder(!overUnder)}
      >
        <option value="Fulltime Results">Fulltime Results</option>
        <option value="Fulltime Results1">Over/Under</option>
        <option value="Fulltime Results2">Fulltime Results3</option>
        <option value="Fulltime Results3">Fulltime Results4</option>
      </select>
    </div>
  );
};

export default Fulltime;
