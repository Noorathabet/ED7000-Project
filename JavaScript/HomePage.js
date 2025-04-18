// Background Image Slideshow
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");

const backgrounds = [bg1, bg2, bg3];
let current = 0;
changeBackground(); // run once at start

function changeBackground() {
  backgrounds.forEach((bg, i) => {
    bg.style.opacity = i === current ? '1' : '0';
  });
  current = (current + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000); // rotate every 5 seconds

document.addEventListener("DOMContentLoaded", function () {
  const showRegistration = document.getElementById("showRegistration");
  const registrationForm = document.getElementById("registrationForm");
  const messageDiv = document.getElementById("message");
  const submitButton = registrationForm.querySelector('button[type="submit"]');

  showRegistration.addEventListener("click", function (event) {
      event.preventDefault();
      registrationForm.style.display = "block"; // Show the registration form
      checkFormValidity(); // Check validity when toggled
  });

  const inputFields = registrationForm.querySelectorAll(
      'input[type="text"], input[type="tel"], input[type="email"]'
  );

  inputFields.forEach((field) => {
      field.addEventListener("input", function () {
          validateField(this);
          checkFormValidity();
      });
  });

  registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();
      messageDiv.textContent = "";

      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;

      if (checkFormValidity()) {
          messageDiv.textContent = "Registration successful!";
          submitButton.style.backgroundColor = "lightgreen";
          messageDiv.style.color = "darkgreen";

          handleRegistrationSuccess(firstName, lastName);
          
          // Close the form after successful registration
          registrationForm.style.display = "none"; // Hide the registration form
      } else {
          messageDiv.style.color = "red";
      }
  });

  function validateField(field) {
      const isValid = validateInput(field);
      field.style.backgroundColor = isValid ? "white" : "lightcoral";
  }

  function validateInput(field) {
      const id = field.id;
      const value = field.value;
      let isValid = true;

      switch (id) {
          case "firstName":
          case "lastName":
              isValid = value.length >= 3; 
              break;
          case "phoneNumber":
              isValid = value.length === 8 && /^\d+$/.test(value); 
              break;
          case "email":
              isValid = value.includes("@"); 
              break;
      }
      return isValid;
  }

  function checkFormValidity() {
      const allValid = Array.from(inputFields).every(validateInput);
      submitButton.disabled = !allValid;
      submitButton.style.backgroundColor = allValid ? "lightgreen" : "grey";
      return allValid;
  }

  checkExistingUser(); // Call on page load
});

function displayUserName(firstName, lastName) {
  var userNameElement = document.getElementById("userName");
  userNameElement.innerHTML = `Welcome, ${firstName} ${lastName}!`;
  userNameElement.style.display = "inline"; // Ensure the username is displayed
}
// Function to handle registration success and display welcome message
function handleRegistrationSuccess(firstName, lastName) {
  sessionStorage.setItem("firstName", firstName);
  sessionStorage.setItem("lastName", lastName);
  displayUserName(firstName, lastName); // Ensure this function is called
}

// Function to check for existing user and display welcome message on page load
function checkExistingUser() {
  const firstName = sessionStorage.getItem("firstName");
  const lastName = sessionStorage.getItem("lastName");
  if (firstName && lastName) {
      handleRegistrationSuccess(firstName, lastName); 
  }
}