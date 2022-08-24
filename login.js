//Login user
const login = document.getElementById("login");
login.addEventListener('submit',  e => {
e.preventDefault();

 
const email = document.getElementById("User").value;
const password = document.getElementById("password").value;
 
console.log(email); 

auth.signInWithEmailAndPassword(email , password)
.then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    location.replace("./homepage.html");
    

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage)
    location.replace("./Loginpage.html");
  });
})

 

 