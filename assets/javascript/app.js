  // Initialize Firebase
  const config = {
    apiKey: firebaseAPI,
    authDomain: "curate-ss.firebaseapp.com",
    databaseURL: "https://curate-ss.firebaseio.com",
    projectId: "curate-ss",
    storageBucket: "curate-ss.appspot.com",
    messagingSenderId: "872408743875"
  };
  firebase.initializeApp(config);