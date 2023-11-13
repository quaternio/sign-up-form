
// Grab the form and disable default validation
const form = document.getElementById("user-info-form");
form.noValidate = true;

const passwordsValid = (pwdA, pwdB) => {
  return pwdA === pwdB;
}

form.addEventListener("submit", (e) => {
  const formElement = e.target;

  const pwdA = document.querySelector('#user-password').value;
  const pwdB = document.querySelector('#user-confirm-password').value;
  const passwordsMatch = passwordsValid(pwdA, pwdB);

  const userPwd = document.getElementById("user-password");
  const userConfirmPwd = document.getElementById("user-confirm-password"); 
  const errorElem = document.getElementById("error");

  const borderColor = "#E5E7EB";
  const errorBorderColor = "#D97E7B";
 
  if (formElement.checkValidity() && passwordsMatch) {
  } else {
    if (!passwordsMatch) {
      userPwd.style.borderColor = errorBorderColor;
      userConfirmPwd.style.borderColor = errorBorderColor;

      errorElem.style.display = "block"; 

      console.log(pwdA);
      console.log(pwdB);
    } else {
      if (userPwd.classList.contains("invalid")) {
        userPwd.style.borderColor = borderColor;
        userConfirmPwd.style.borderColor = borderColor;
          
        errorElem.style.display = "none";
      }
    }

    // Stop the page from submitting and refreshing
    e.preventDefault();
  }
});
