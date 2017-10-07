const initialState = {
  cart: [],
}

const cartReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'CART_ITEM_ADDED': {
      return Object.assign({}, state, {
        cart: state.cart.concat(action.payload)
      })
    }
    case 'CART_ITEM_REMOVED': {
      return Object.assign({}, state, {
        cart: state.cart.filter(item => {
          return item.id === action.payload ? null : item;
        })
      })
    }
    default: {
      return state;
    }
  }
}

export default cartReducer;