import React from "react";
import "../App.css";

const Stats = props => {
  const { count, status } = props;
  const divType = status === "deleted" ? "removedDiv" : "addDiv";
  const addOrRemoved = status === "deleted" ? "removed" : "additions";
  const countType = status === "deleted" ? "Removals" : "Additions";
  const negOrPos = status === "deleted" ? "-" : "+";

  return (
    <div>
      <div className={divType}>
        <em className={addOrRemoved}>{negOrPos}</em>
        <span className="statsClass">
          {count} {countType}
        </span>
      </div>
    </div>
  );
};

export default Stats;
