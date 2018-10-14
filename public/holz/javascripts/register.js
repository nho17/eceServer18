function sendReqForSignup() {
  var email = document.getElementById("email").value;
  var fullName = document.getElementById("fullName").value;
  var password = document.getElementById("password").value;
  var passwordConfirm = document.getElementById("passwordConfirm").value;

  // FIXME: More thorough validation should be performed here. 
  if (password != passwordConfirm) {
    var responseDiv = document.getElementById('ServerResponse');
    responseDiv.style.display = "block";
    responseDiv.innerHTML = "<p>Password does not match.</p>";
    return;
  }
  
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", signUpResponse);
  xhr.responseType = "json";
  xhr.open("POST", '/users/register');
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify({email:email,fullName:fullName, password:password}));
}

function signUpResponse() {
   // TODO
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("signup").addEventListener("click", sendReqForSignup);
});
