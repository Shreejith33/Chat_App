
//ADD YOUR FIREBASE LINKS HERE


function Add_Room() 
{
   User_Name = document.getElementById("User_Name").value;
   firebase.database().ref("/").child(User_Name).update({purpose:"Adding User"});
}

const firebaseConfig = {
   apiKey: "AIzaSyCBr520C9_LW4WbzGYMLDSwSR-gmNhnYYc",
   authDomain: "practice-73e8c.firebaseapp.com",
   databaseURL: "https://practice-73e8c-default-rtdb.firebaseio.com",
   projectId: "practice-73e8c",
   storageBucket: "practice-73e8c.appspot.com",
   messagingSenderId: "851850894260",
   appId: "1:851850894260:web:f97c1515aa5a95c5afb0e1"
 };
 
 const app = initializeApp(firebaseConfig);
  

getData();

function logout()
{
      localStorage.removeItem("Username");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}

function Add_Room()
{
      RoomName = document.getElementById("RoomName").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("RoomName", RoomName);
      window.location = "kwitter_page.html";
}
