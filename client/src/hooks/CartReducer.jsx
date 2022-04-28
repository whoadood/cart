export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return action.newState;
      break;
    }
    case "RESET_CART": {
      return "hello from context";
    }
    default:
      return state;
      break;
  }
};
