import React from "react";
import "../css/InputOutput.css";

class Output extends React.Component {
  render() {
    return (
      <div className="Output">
        <textarea
          value={
            this.props.output === "Null"
              ? "Empty, above cannot be."
              : this.props.output
          }
          readOnly
        />
      </div>
    );
  }
}

export default Output;
