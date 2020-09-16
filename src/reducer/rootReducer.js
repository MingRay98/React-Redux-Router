const initialState = {
  count: 0,
  test: "testString"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + action.payload };
    case "MINUS":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default rootReducer;
