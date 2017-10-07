export const addToCart = (item) => {
  return function(dispatch) {
    dispatch({type: 'CART_ITEM_ADDED', payload: item});
  }
};

export const removeFromCart = (item) => {
  return function(dispatch) {
    dispatch({type: 'CART_ITEM_REMOVED', payload: item.id})
  }
};