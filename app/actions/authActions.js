import firebase, { auth } from '../firebase/firebase';
import axios from 'axios';

export const emailSignUp = (name, email, pw) => {
  return function(dispatch) {
    dispatch({type: 'USER_SIGNUP_PENDING'});
    auth.createUserWithEmailAndPassword(email, pw)
      .then(result => {
        axios.post('http://10.0.2.2:3000/api/user', {
          userName: name,
          userEmail: email
        })
          .then(({ data }) => {
            dispatch({type: 'USER_SIGNUP_FULFILLED', payload: name});
          })
          .catch(err => {
            dispatch({type: 'USER_SIGNUP_REJECTED', payload: err});
          });
      })
      .catch(err => {
        console.log('Firebase signup err: ', err);
        dispatch({type: 'USER_SIGNUP_REJECTED', payload: err});
      })
  };
};

export const emailLogin = (email, pw) => {
  return function(dispatch) {
    dispatch({type: 'USER_LOGIN_PENDING'});
    auth.signInWithEmailAndPassword(email, pw)
      .then(result => {
          axios.get(`http://10.0.2.2:3000/api/user/${email}`)
            .then(({ data }) => {
              dispatch({type: 'USER_LOGIN_FULFILLED', payload: data.userName || result.email});
            })
            .catch(err => {
              console.log(err);
              dispatch({type: 'USER_LOGIN_REJECTED', payload: err});
            });
        })
        .catch(err => {
          dispatch({type: 'USER_LOGIN_REJECTED', payload: err});
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