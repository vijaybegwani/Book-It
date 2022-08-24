 
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
     
    const user = firebase.auth().currentUser
    var uid = user.uid;

    db.collection("users").doc(uid).get().then((doc)=>{
      if(doc.exists){
        console.log(doc.data());
       var name =  doc.data().name;
       document.getElementById("name").innerHTML =  name;
      }
    })
     
    console.log(uid)
    if(user != null){
        var email_id = user.email;
       
        document.getElementById("emailID").innerHTML = email_id;
        
    }
    // ...
  } else {
      location.replace("Loginpage.html")
     
  }
});
 
 
 
 