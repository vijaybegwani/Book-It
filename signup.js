const signup_form = document.getElementById('signup-form');
signup_form.addEventListener('submit', (e) => {
    e.preventDefault();
const uname = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password =document.getElementById("pass") .value;
const c_password =document.getElementById("repass") .value;
const mobile = document.getElementById("mob").value;
// const signUpBtn = document.getElementById("signUp")




//required condn for sign up
if ( mobile > 9999999999 || mobile < 5555555555){
    alert("Please enter valid Number");


}
else if (password.length < 6){
    alert("Password should be greater or equal to 6 characters");
}
else{
    if (password !== c_password){
        alert("Entered Passwords doesnot match!");
    }
    
    else{

        //creating user
        auth.createUserWithEmailAndPassword(email , password ).then((userCredential) => {
                var user = userCredential.user;
                console.log(userCredential);

        //Creating Users collection in firestore
        function createUserCollection(user) {
            firebase.firestore().collection("users").doc(user.uid)
          .set({
            uid: user.uid,
            name: uname,
            email: user.email,
            mobile: mobile
          }).then(()=>{
             
            alert("Your account has been created succesfully")
            authchanges();    
          })
        }
         createUserCollection(userCredential.user)
        })  
        console.log(uname, email, password, c_password, mobile);
    
  
        
       
        }
   
    }
        
    function authchanges(){
        location.replace("./Loginpage.html")    
    }
})

 

  
  


  
 


  





