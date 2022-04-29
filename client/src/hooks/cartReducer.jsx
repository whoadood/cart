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
    default: {
      return state;
    }
  }
};
