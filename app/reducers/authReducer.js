const initialState = {
  loggigIn: false,
  authenticated: false,
  loggingOut: false,
  user: {},
  error: null,
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'USER_LOGIN_PENDING': {
      return Object.assign({}, state, {
        loggigIn: true
      });
    }
    case 'USER_LOGIN_FULFILLED': {
      return Object.assign({}, state, {
        loggigIn: false,
        authenticated: true,
        user: Object.assign({}, action.payload)
      });
    }
    case 'USER_LOGIN_REJECTED': {
      return Object.assign({}, state, {
        loggigIn: false,
        error: action.payload
      });
    }
    case 'USER_LOGOUT_PENDING': {
      return Object.assign({}, state, {
        loggingOut: true,
      });
    }
    case 'USER_LOGOUT_FULFILLED': {
      return Object.assign({}, state, {
        loggingOut: false,
        authenticated: false
      });
    }
    case 'USER_LOGOUT_REJECTED': {
      return Object.assign({}, state, {
        loggingOut: false,
        error: action.payload
      })
    }
    default: {
      return state;
    }
  }
}

export default authReducer;