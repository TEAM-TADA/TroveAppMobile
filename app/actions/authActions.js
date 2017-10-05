import firebase, { auth } from '../firebase/firebase';
import axios from 'axios';

export const emailSignUp = (name, email, pw) => {
  auth.createUserWithEmailAndPassword(newEmail, pw)
    .then(result => {
      dispatch({type: 'USER_SIGNUP_PENDING'});
      axios.post('/api/user', {
        userName: name,
        userEmail: email
      })
        .then(({ data }) => {
          dispatch({type: 'USER_SIGNUP_FULFILLED', payload: data});
        })
        .catch(err => {
          dispatch({type: 'USER_SIGNUP_REJECTED', payload: err});
        });
    })
    .catch(err => {
      dispatch({type: 'USER_SIGNUP_REJECTED', payload: err});
    });
};

export const emailLogin = (email, pw) => {
  return function(dispatch) {
    auth.signInWithEmailAndPassword(email, pw)
      .then(result => {

      })
  }
}