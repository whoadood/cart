export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return action.newState;
      break;
    }
    default:
      return state;
      break;
  }
};
