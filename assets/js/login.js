 // Initialize Firebase
 var usuarioLogueado="";
 var config = {
    apiKey: "AIzaSyCStjCk6tCJSjTjIfXjQalWvk2ywT0afpU",
    authDomain: "musiquita-93bb5.firebaseapp.com",
    databaseURL: "https://musiquita-93bb5.firebaseio.com",
    projectId: "musiquita-93bb5",
    storageBucket: "musiquita-93bb5.appspot.com",
    messagingSenderId: "703892317850"
  };

firebase.initializeApp(config);
var db = firebase.database();


$(document).ready(function(){
   $("#btnLogin").click(function(){
    
    var email2= document.getElementById('email2').value;
    var password2= document.getElementById('password2').value;
    firebase.auth().signInWithEmailAndPassword(email2, password2).then(()=>{
      location.replace('musiquita.html');
    }).catch(function(error) {
      /** Handle Errors here. */
      var errorCode = error.code; 
      var errorMessage = error.message;
      alert(errorMessage);
      alert(error.code);
      // ...
    });
    })
   

	// Rescatar inormación del formulario crear perfil
	$('#btn-sign-up').click(function(){
    var email= document.getElementById('correo').value;
    var password= document.getElementById('clave').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
    location.replace('musiquita.html');
    }).catch(function(error) {
      /** Handle Errors here. */
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage);
      alert(error.code);
    });
  })
  $('#modal1').modal();
})

