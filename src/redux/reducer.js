const defaultState = {
  input: null,
  output: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TRANSLATE":
      return {
        ...state,
        output: action.text
      };
    case "INPUT_TEXT":
      return {
        ...state,
        input: action.text
      };

    default:
      return state;
  }
};

export default reducer;
