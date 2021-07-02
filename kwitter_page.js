 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDNQ3zVUFJcu-QD-vPkjy4lylcldlnRC4A",
    authDomain: "kwitter-project-8f05c.firebaseapp.com",
    databaseURL: "https://kwitter-project-8f05c-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-8f05c",
    storageBucket: "kwitter-project-8f05c.appspot.com",
    messagingSenderId: "540595829795",
    appId: "1:540595829795:web:cf57c292d556507e8d0596"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user=");
    room_name=localStorage.getItem("name-");

    function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
        });
        document.getElementById("msg").value="";
    }