firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("login");
    }
    else {
        logout();
        
    }
})
document.getElementById("logout").addEventListener("click" , logout);
    function logout(){
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
          location.replace("Loginpage.html")
        }).catch((error) => {
          // An error happened.
        });
      }