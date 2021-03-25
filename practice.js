
//ADD YOUR FIREBASE LINKS 
var firebaseConfig = {
    apiKey: "AIzaSyC2Igq-BVGwcz-djnQqQmao61ynmTfco2k",
    authDomain: "practise-61ce0.firebaseapp.com",
    databaseURL: "https://practise-61ce0-default-rtdb.firebaseio.com",
    projectId: "practise-61ce0",
    storageBucket: "practise-61ce0.appspot.com",
    messagingSenderId: "548007400862",
    appId: "1:548007400862:web:df5832bb28047a9601728f",
    measurementId: "G-TTW7KCQC3D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){

  
  user_name = document.getElementById("user_name").value
  firebase.database().ref("/").child(user_name).update({
      purpose: "adding user"
  });

  }
