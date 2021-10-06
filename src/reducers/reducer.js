const initialState = {
  number: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "BUTTON_ADD_TO_COLLECTION_PRESSED") {
    return {
      number: state.number + 1
    };
  }
  return state;
};

export default reducer;
