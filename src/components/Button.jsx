import React from "react";
import "../css/Button.css";

class Button extends React.Component {
  render() {
    return (
      <div className="Button">
        <input
          type="button"
          onClick={e => {
            this.props.yodaTranslate(this.props.input);
            console.log(this.props);
          }}
        />
      </div>
    );
  }
}

export default Button;
