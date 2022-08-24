let suggestions = [
    "Mechanics",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Basic Electrical Engineering"
];
let psuggestions = [
    "Physics"
];
let csuggestions = [
    "Chemistry"
];
let msuggestions = [
    "Mathematics"
];
let bsuggestions = [
    "Basic Electrical Engineering"
];
let mesuggestions = [
    "Mechanics"
];
// const firebaseConfig = {
//       apiKey: "AIzaSyAg6yb_FDLP79hyiw5cVqJSScoSaxxTiKw",
//       authDomain: "bookit-6c0bb.firebaseapp.com",
//       databaseURL: "https://bookit-6c0bb-default-rtdb.firebaseio.com",
//       projectId: "bookit-6c0bb",
//       storageBucket: "bookit-6c0bb.appspot.com",
//       messagingSenderId: "953227991864",
//       appId: "1:953227991864:web:0d63e90be99e09154bffcd",
//       measurementId: "G-MVD3720NYL"
//     };


// firebase.initializeApp(firebaseConfig);


var userDataRef = firebase.database().ref("Sem1_books").orderByKey();
userDataRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();

      //var sem_val = childSnapshot.val().Semester;
      var price_val = childSnapshot.val().Price;
      var aname_val = childSnapshot.val().AuthorName;
      var sub_val = childSnapshot.val().Subject;
      console.log(sub_val)
      if (sub_val.includes("BEE")){
        suggestions.push(aname_val + " - BEE")
        bsuggestions.push(aname_val)
      }
      else if (sub_val.includes("Physics")){
        suggestions.push(aname_val + " - Physics")
        psuggestions.push(aname_val)
      }
      else if (sub_val.includes("Chemistry")){
        suggestions.push(aname_val + " - Chemistry")
        csuggestions.push(aname_val)
      }
      else if (sub_val.includes("Math")){
        suggestions.push(aname_val + " - Mathematics")
        msuggestions.push(aname_val)
      }
      else if (sub_val.includes("Mech")){
        suggestions.push(aname_val + " - Mechanics")
        mesuggestions.push(aname_val)
      }
      else {
        suggestions.push(aname_val)
      }
      console.log(aname_val)
  });
})