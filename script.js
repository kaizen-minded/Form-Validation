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
function isValidEmail(email) {
  return email.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i);
}
//Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if(username.value === ''){
    showError(username, 'Username is required')
  } else {
    showSuccess(username);
  }
  if(email.value === ''){
    showError(email, 'Email is required')
  } else if (!isValidEmail(email.value)){
    showError(email, 'Email is not valid')
  }
  else {
    showSuccess(email);
  }
  if(password.value === ''){
    showError(password, 'Password is required')
  } else {
    showSuccess(password);
  }
  if(password2.value === ''){
    showError(password2, 'Password does not match')
  } else {
    showSuccess(password2);
  }
})
