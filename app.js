// Initialize Firebase
    var config = {
        apiKey: "AIzaSyAuGWK3aQiwgAZzkA4Z9NbqG6q8qJvr7AA",
        authDomain: "status-friend-finder.firebaseapp.com",
        databaseURL: "https://status-friend-finder.firebaseio.com",
        storageBucket: "status-friend-finder.appspot.com",
        messagingSenderId: "38615167502"
    };
firebase.initializeApp(config);

// Get elements

const signupPubkey = document.getElementById('publicKey');
const signupPass = document.getElementById('password');
const signupButton = document.getElementById('signupButton');

const signinPubkey = document.getElementById('signinPublicKey');
const signinPass = document.getElementById('signinPassword');
const signinButton = document.getElementById('signinButton');