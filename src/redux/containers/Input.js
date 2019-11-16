import { connect } from "react-redux";
import Input from "../../components/Input";
import { yodaTranslateAsync, inputText } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    yodaTranslate: text => {
      const res = yodaTranslateAsync(text);
      dispatch(res);
    },
    inputText: text => {
      const res = inputText(text);
      dispatch(res);
    }
  };
};

const mapStateToProps = state => {
  return {
    input: state.input,
    output: state.output
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
