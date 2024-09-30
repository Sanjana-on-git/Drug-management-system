document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const signUpLink = document.querySelector('.signUp-link');
const container = document.querySelector('.container');
const registrationForm = document.querySelector('.registration-form');

signUpLink.addEventListener('click', () => {
  container.classList.toggle('slide');
  registrationForm.classList.toggle('show');
});

function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
 
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }
    // script.js

// Function to show the Sign In form and hide the Sign Up form
function showSignIn() {
    document.getElementById('signInContainer').style.display = 'block';
    document.getElementById('signUpContainer').style.display = 'none';
  }
  
  // Function to show the Sign Up form and hide the Sign In form
  function showSignUp() {
    document.getElementById('signInContainer').style.display = 'none';
    document.getElementById('signUpContainer').style.display = 'block';
  }
  
  // Initialize by showing the Sign In form
  window.onload = function() {
    showSignIn();
  };
  