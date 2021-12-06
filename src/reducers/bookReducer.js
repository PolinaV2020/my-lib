const initialState = {
  bookLikesNumber: 0
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {

  case "BUTTON_LIKE_CLICK": 
    return {...state, bookLikesNumber: state.bookLikesNumber + 1}

      default:
        return state;

  }
};

export default bookReducer;
