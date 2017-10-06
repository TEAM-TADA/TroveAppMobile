import axios from 'axios';

export const fetchItems = () => {
  return function(dispatch) {
    dispatch({type: 'ITEM_FETCH_PENDING'});
    axios.get('http://10.0.2.2:3000/api')
      .then(items => {
        dispatch({type: 'ITEM_FETCH_FULFILLED', payload: items.data});
      })
      .catch(err => {
        dispatch({type: 'ITEM_FETCH_REJECTED', payload: err});
      });
  };
};

