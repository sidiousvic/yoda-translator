export const yodaTranslateAsync = text => {
  return function(dispatch) {
    return (() => {
      fetch(`https://yodish.p.rapidapi.com/yoda.json?text=${text}`, {
        method: "POST",
        headers: {
          "x-rapidapi-host": "yodish.p.rapidapi.com",
          "x-rapidapi-key":
            "8036578aaemsh08b2547a8d8f6c8p144d3bjsna14fef356bb7",
          "content-type": "application/x-www-form-urlencoded"
        },
        body: {}
      })
        .then(response => {
          response.json().then(data => {
            const text = data.contents.translated.replace("  ", " ");
            dispatch(yodaTranslate(text));
          });
        })
        .then(() => {
          console.log("Success.");
        })
        .catch(err => {
          console.log(err);
        });
    })();
  };
};

const yodaTranslate = text => {
  return {
    type: "TRANSLATE",
    text
  };
};

export const inputText = text => {
  return {
    type: "INPUT_TEXT",
    text
  };
};
