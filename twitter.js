function signin()
        {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().useDeviceLanguage();
        firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      var token = result.credential.accessToken;
      console.log(token);
      var secret = result.credential.secret;
      console.log(secret);
      // The signed-in user info.
    
      document.querySelector("#sign-out").style.display="block";
      var user = result.user;
      console.log(user.email);
      var userImage = document.querySelector("#user-image");
    
      // appending the user profile image
    
      var userPic = document.createElement("img");
      userPic.src=user.photoURL;
      userImage.append(userPic);
    
      // appending the user email address
    
      var userEmail = document.querySelector("#user-email");
      userEmail.innerHTML = user.displayName;
    
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
        }

        var firebase = require('firebase');
firebase.intializeApp({
  apiKey: "AIzaSyD6EqfZaRhTQtT7l2q8UZC3V4wwF3ZX4PU",
  authDomain: "twitter-login-f3514.firebaseapp.com",
  projectId: "twitter-login-f3514",
  storageBucket: "twitter-login-f3514.appspot.com",
  messagingSenderId: "899281716536",
  appId: "1:899281716536:web:393b828eb3c519e8156dcd"
});