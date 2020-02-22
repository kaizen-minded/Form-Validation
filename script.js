const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
//Show success outline
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
//Email Validation
function isValidEmail(input) {
  const re = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
  if(input.value.match(re)){
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
  // return email.match(re);
}
//Check require fields
function checkRequired(inputArr){
  inputArr.forEach(function(input) {
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}
//Create title for Fieldname
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//Check length requirements
function lengthRequired(input, min, max) {
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} needs to be greater than ${min} characters`);
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)} needs to be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}
//Confirm passwords match
function passwordMatch(input1, input2) {
  if(input1.value !== input2.value){
    showError(input2, 'Password does not match')
  }
}

//Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkRequired([username, email, password, password2]);
  lengthRequired(username, 3, 15);
  lengthRequired(password, 6, 20);
  isValidEmail(email);
  passwordMatch(password, password2);
})
