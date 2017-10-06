import firebase, { auth } from '../firebase/firebase';
import axios from 'axios';

export const emailSignUp = (name, email, pw) => {
  return function(dispatch) {
    dispatch({type: 'USER_SIGNUP_PENDING'});
    auth.createUserWithEmailAndPassword(newEmail, pw)
      .then(result => {
        dispatch({type: 'USER_SIGNUP_FULFILLED', payload: result.displayName});
      //   axios.post('/api/user', {
      //     userName: name,
      //     userEmail: email
      //   })
      //     .then(({ data }) => {
      //       dispatch({type: 'USER_SIGNUP_FULFILLED', payload: data});
      //     })
      //     .catch(err => {
      //       dispatch({type: 'USER_SIGNUP_REJECTED', payload: err});
      //     });
      // })
      // .catch(err => {
      //   dispatch({type: 'USER_SIGNUP_REJECTED', payload: err});
      })
      .catch(err => {
        dispatch({type: 'USER_SIGNUP_REJECTED', payload: err});
      })
  };
};

export const emailLogin = (email, pw) => {
  return function(dispatch) {
    dispatch({type: 'USER_LOGIN_PENDING'});
    auth.signInWithEmailAndPassword(email, pw)
      .then(result => {
        dispatch({type: 'USER_LOGIN_FULFILLED', payload: result.displayName || result.email});
      //   axios.get(`https://localhost:3000/api/user/${email}`)
      //     .then(({ data }) => {
      //       console.log('got data!')
      //       dispatch({type: 'USER_LOGIN_FULFILLED', payload: data});
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       dispatch({type: 'USER_LOGIN_REJECTED', payload: err});
      //     });
      // })
      // .catch(err => {
      //   dispatch({type: 'USER_LOGIN_REJECTED', payload: err});
      })
      .catch(err => {
        dispatch({type: 'USER_LOGIN_REJECTED', payload: err});
      });
  };
};

export const logout = () => {
  return function(dispatch) {
    dispatch({type: 'USER_LOGOUT_PENDING'});
    auth.signOut()
      .then(() => {
        dispatch({type: 'USER_LOGOUT_FULFILLED'});
      })
      .catch(err => {
        dispatch({type: 'USER_LOGOUT_REJECTED', payload: err});
      });
  }
}