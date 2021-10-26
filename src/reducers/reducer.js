const initialState = {
  bookLikesNumber: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === "BUTTON_LIKE_CLICK") {
    return {
      bookLikesNumber: state.bookLikesNumber + 1
    };
  }
  return state;
};

export default reducer;
