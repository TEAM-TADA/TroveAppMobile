const initialState = {
  loggingIn: false,
  loggingOut: false,
  signingIn: false,
  authenticated: false,
  user: '',
  error: null,
}

const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'USER_SIGNUP_PENDING': {
      return Object.assign({}, state, {
        signingIn: true
      });
    }
    case 'USER_SIGNUP_FULFILLED': {
      return Object.assign({}, state, {
        signingIn: false,
        authenticated: true,
        user: action.payload
      });
    }
    case 'USER_SIGNUP_REJECTED': {
      return Object.assign({}, state, {
        signingIn: false,
        error: action.payload
      })
    }
    case 'USER_LOGIN_PENDING': {
      console.log('reducer watching logging in');
      return Object.assign({}, state, {
        loggingIn: true
      });
    }
    case 'USER_LOGIN_FULFILLED': {
      console.log('reducer watching logged in');
      return Object.assign({}, state, {
        loggingIn: false,
        authenticated: true,
        user: action.payload
      });
    }
    case 'USER_LOGIN_REJECTED': {
      return Object.assign({}, state, {
        loggingIn: false,
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
        authenticated: false,
        user: ''
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