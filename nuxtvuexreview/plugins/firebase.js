import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDZFg0sM53tlN-qNnIwy3l24Y5_BIWl8g8',
  authDomain: 'review-app-ef237.firebaseapp.com',
  databaseURL: 'https://review-app-ef237.firebaseio.com',
  projectId: 'review-app-ef237',
  storageBucket: 'review-app-ef237.appspot.com',
  messagingSenderId: '683557197659'
};
firebase.initializeApp(config)

export default firebase
