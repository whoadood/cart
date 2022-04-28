export const CartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...cart, action.product];
    }
    case "DELETE_ITEM": {
      return cart.filter((prod) => prod.id !== action.product.id);
    }
    default: {
      return cart;
    }
  }
};
