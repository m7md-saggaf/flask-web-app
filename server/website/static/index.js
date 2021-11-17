function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

$(".nav .nav-link").on("click", function(){
  $(".nav").find(".active").removeClass("active");
  $(this).addClass("active");
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLj1zvvQeIQKo7eKuB5yk8IzpQhlXfkws",
  authDomain: "web-design-292220.firebaseapp.com",
  projectId: "web-design-292220",
  storageBucket: "web-design-292220.appspot.com",
  messagingSenderId: "702436379898",
  appId: "1:702436379898:web:c8def676cce1da2d294d43",
  measurementId: "G-TLJBN62Z0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
