import firebase from "firebase/app"
import "firebase/database"

const config = {
    apiKey: "AIzaSyCrdZpE5U0EGXi7reWtCPeLNG0T-GLO7yQ",
    authDomain: "chat-app-firebase-fa32c.firebaseapp.com",
    projectId: "chat-app-firebase-fa32c",
    storageBucket: "chat-app-firebase-fa32c.appspot.com",
    messagingSenderId: "391611001170",
    appId: "1:391611001170:web:01e8253f3a8d3b7f98b28b"
}

const db = firebase.initializeApp(config)

export default db