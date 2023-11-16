// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUu1I0Od0kTRnnzbc0tLZcevJN8BoUUT8",
    authDomain: "facefake-37c3c.firebaseapp.com",
    databaseURL: "https://facefake-37c3c-default-rtdb.firebaseio.com",
    projectId: "facefake-37c3c",
    storageBucket: "facefake-37c3c.appspot.com",
    messagingSenderId: "431971058340",
    appId: "1:431971058340:web:a070742f2ad5b2670c5c31"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

userfake = localStorage.getItem("userfake");
room_name = localStorage.getItem("Room_name");

function Enviar()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: userfake,
            message: msg,
            like: 0
      });

      msg = document.getElementById("msg").value = "";
}

function exit()
{
      localStorage.removeItem("userfake");
      localStorage.removeItem("Room_name");
      window.location.replace("index.html");
}