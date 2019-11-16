import React from "react";
import "../css/InputOutput.css";

class Output extends React.Component {
  render() {
    return (
      <div className="Output">
        <textarea value={this.props.output} />
      </div>
    );
  }
}

export default Output;
