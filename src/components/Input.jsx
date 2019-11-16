import React from "react";
import "../css/InputOutput.css";

class Input extends React.Component {
  render() {
    return (
      <div className="Input">
        <textarea
          onChange={e => {
            this.props.inputText(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Input;
