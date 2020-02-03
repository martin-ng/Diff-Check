import React from "react";
import "../App.css";

const TextView = props => {
  let sameText = props.textData[0];
  let deletedOrAdded = props.textData[1];
  let status = props.status;
  let lineContent = status === "deleted" ? "lineContentDel" : "lineContentAdd";
  console.log("textview props: ", props);

  return (
    <div className="textView">
      <div style={{ height: "100px" }}></div>
      <table className="textCompare" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr className={lineContent}>
            <td>
              {sameText.length <= deletedOrAdded.length
                ? deletedOrAdded.map((word, index) => {
                    if (word === undefined) {
                      return <span key={index}>{sameText[index]} </span>;
                    } else {
                      return (
                        <span key={index} className={status}>
                          {deletedOrAdded[index]}{" "}
                        </span>
                      );
                    }
                  })
                : sameText.map((word, index) => {
                    if (word === undefined) {
                      return (
                        <span key={index} className={status}>
                          {deletedOrAdded[index]}{" "}
                        </span>
                      );
                    } else {
                      return <span key={index}>{sameText[index]} </span>;
                    }
                  })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TextView;
