function readMoreBtn() {
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("registerForm").style.display = "";
  document.getElementById("btnLearMore").style.display = "none";
}
function registerBtn() {
  var firstName = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  var cpwd = document.getElementById("cpwd").value;

  var letters = /^[A-Za-z]+$/;

  if (firstName == "") {
    alert("Please enter your NAME");
  } else if (!letters.test(firstName)) {
    alert("Name field required only alphabet characters");
  } else if (lastName == "") {
    alert("Please enter your SURNAME");
  } else if (!letters.test(lastName)) {
    alert("LAST NAME field required only alphabet characters");
  } else if (userName == "") {
    alert("Please enter your USERNAME");
  } else if (pwd == "") {
    alert("Please enter Password");
  } else if (cpwd == "") {
    alert("Enter Confirm Password");
  } else if (pwd != cpwd) {
    alert("Password not Matched");
  } else if (document.getElementById("cpwd").value.length < 4) {
    alert("Password minimum length is 4");
  } else if (document.getElementById("cpwd").value.length > 12) {
    alert("Password max length is 8");
  } else if (!$(document.getElementById("tandC")).is(":checked")) {
    alert("Please confirm our Terms & Conditions ");
  } else {
    alert(
      "Congratulations " +
        firstName +
        ", your account has been successfully created."
    );
    document.getElementById("registerRow").innerHTML = document.getElementById(
      "extraInfo"
    ).innerHTML;
  }
}
