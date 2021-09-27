
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDbeqx_SvSPp751tD2MVhbxNIKYtgwF7YU",
      authDomain: "kwitter-573d7.firebaseapp.com",
      projectId: "kwitter-573d7",
      storageBucket: "kwitter-573d7.appspot.com",
      messagingSenderId: "790560111804",
      appId: "1:790560111804:web:f434cc39802d84d08ba4b9"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
