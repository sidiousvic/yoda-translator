import React from "react";
import "../css/Translator.css";
import Input from "../redux/containers/Input";
import Output from "../redux/containers/Output";
import Button from "../redux/containers/Button";

class Translator extends React.Component {
  componentDidUpdate() {
    if (this.props.output) console.log(this.props.output);
  }

  render() {
    return (
      <div className="translator-wrapper">
        <h1>Like Yoda, Say It</h1>
        <div className="translator">
          <Input id="input" />
          <Button
            onClick={e => {
              this.props.yodaTranslate("I want a burger");
            }}
          />
          <Output id="output" />
        </div>
      </div>
    );
  }
}

export default Translator;
