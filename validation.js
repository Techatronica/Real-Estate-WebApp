"use strict";

let uname = document.getElementById("name");
let mobNum = document.getElementById("mobile");
let uemail = document.getElementById("email");
let form = document.getElementById("form");

function validateForm() {
  let uname = document.getElementById("name");
  let mobNum = document.getElementById("mobile");
  let uemail = document.getElementById("email");
  if (validatename(uname)) {
    if (allnumeric(mobNum)) {
      if (ValidateEmail(uemail)) {
        if (submit()) {
        }
      }
    }
  }
  return false;
}
//Note the use of RegExp (regular expressions).
function validatename(uname) {
  let letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  }
  alert("Name field incomplete, alphabet characters only");
  uname.focus();
  return false;
}

function allnumeric(mobNum) {
  let numbers = /^[0-9]+$/;
  if (mobNum.value.match(numbers)) {
    return true;
  }
  alert("Mobile number must have numeric characters only");
  mobNum.focus();
  return false;
}

function ValidateEmail(uemail) {
  let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // let emailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (uemail.value.match(emailformat)) {
    return true;
  }

  alert("You have entered an invalid email address!");
  uemail.focus();
  return false;
}

function submit() {
  // alert("Form Succesfully Submitted");
  window.location.reload();
  return true;
}
