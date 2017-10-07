const initialState = {
  fetching: false,
  fetched: false,
  items: [],
  item: {},
  filter: '',
  error: null
}

const itemReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ITEM_FETCH_PENDING': {
      return Object.assign({}, state, {
        fetching: true,
        fetched: false,
      });
    }
    case 'ITEM_FETCH_FULFILLED': {
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        items: action.payload
      });
    }
    case 'ITEM_FETCH_REJECTED': {
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    }
    case 'SAVE_ITEM': {
      return Object.assign({}, state, {
        item: action.payload
      })
    }
    case 'SAVE_FILTER': {
      return Object.assign({}, state, {
        filter: action.payload
      })
    }
    default: {
      return state;
    };
  };
};

export default itemReducer;