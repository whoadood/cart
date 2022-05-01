export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (state.some((prod) => prod.id === action.product.id)) {
        return state.map((prod) =>
          prod.id === action.product.id
            ? { ...action.product, qty: prod.qty + 1 }
            : prod
        );
      }
      return [...state, { ...action.product, qty: 1 }];
    }
    case "UPDATE_CART_QTY": {
      return state.map((prod) =>
        prod.id === action.product.id ? action.product : prod
      );
    }
    case "DELETE_FROM_CART": {
      return state.filter((prod) => prod.id !== action.product.id);
    }
    default: {
      return state;
    }
  }
};
