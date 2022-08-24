const firebaseConfig = {
  apiKey: "AIzaSyAg6yb_FDLP79hyiw5cVqJSScoSaxxTiKw",
  authDomain: "bookit-6c0bb.firebaseapp.com",
  projectId: "bookit-6c0bb",
  storageBucket: "bookit-6c0bb.appspot.com",
  messagingSenderId: "953227991864",
  appId: "1:953227991864:web:0d63e90be99e09154bffcd",
  measurementId: "G-MVD3720NYL",
};

// Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  // const app = initializeApp(firebaseConfig);

{
  /* const analytics = getAnalytics(app); */

}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage(); 



