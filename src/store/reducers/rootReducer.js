import taskReducer from './taskReducer';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import signupReducer from './signupReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  task: taskReducer,
  login: loginReducer,
  logout: logoutReducer,
  signup: signupReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;