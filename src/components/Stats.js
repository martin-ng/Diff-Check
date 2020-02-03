import React from "react";
import "../App.css";

const Stats = props => {
  //   console.log("stats props: ", props);
  const { count, status } = props;
  console.log(count, status);

  return (
    <div className="stats">
      <div className="removed">
        <span className={status}>{count}</span>
      </div>
    </div>
    // <div className="stats">
    // {status === "deleted" ? return <div className="removed">
    //     <span className={status}></span>
    // </div>
    // :

    // <div className="additions">
    //     <span className={status}></span>
    // </div>}

    // </div>
  );
};

export default Stats;
