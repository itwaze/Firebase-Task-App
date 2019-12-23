import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBBFl1bgmaNb1wo3vvztUBKVENbCWV3wrg",
  authDomain: "firestore-d518c.firebaseapp.com",
  databaseURL: "https://firestore-d518c.firebaseio.com",
  projectId: "firestore-d518c",
  storageBucket: "firestore-d518c.appspot.com",
  messagingSenderId: "192418770004",
  appId: "1:192418770004:web:ccae2091bebf788ce891c1"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase