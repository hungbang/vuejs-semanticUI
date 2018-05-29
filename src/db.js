import Firebase from 'firebase'
let config = {
	apiKey: "AIzaSyBpoH6gHAszGnUa0tfW3MptV3SGeIHSz4U",
	authDomain: "vue-firebase-a4a37.firebaseapp.com",
	databaseURL: "https://vue-firebase-a4a37.firebaseio.com",
	projectId: "vue-firebase-a4a37",
	storageBucket: "vue-firebase-a4a37.appspot.com",
	messagingSenderId: "235755496373"
};
let app = Firebase.initializeApp(config)
export const db = app.database()