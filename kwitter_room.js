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
  document.getElementById("user_name").innerHTML=user_name;

  function add_room(){

    room_name=document.getElementById("room_name").value;
    localStorage.setItem("room" , room_name);

    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
    
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirect_room(this.id)' > #"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;

  });});}
  getData();

  function redirect_room(name){
    console.log(name);
    localStorage.setItem("name-", name);
    window.location="kwitter_page.html";
  }

  function logout(){
    localStorage.removeItem("user=");
    localStorage.removeItem("name-");
    window.location="index.html";
  }