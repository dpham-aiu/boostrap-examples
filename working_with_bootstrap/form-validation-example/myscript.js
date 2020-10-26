function validateForm() {
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var country = document.contactForm.country.value;
  var gender = document.contactForm.gender.value;
  var hobbies = [];
  var checkboxes = document.getElementsByName("hobbies[]");
  for (var i = 0; i < checkboxes.lgenth; i++) {
    if (checkboxes[i].checked) {
      hobbies.push(checkboxes[i].value);
    }
  }
  var nameErr = (emailErr = mobileErr = countryErr = genderErr = true);

  //validate name
  if (name == "") {
    printError("nameErr", "Please enter your name.");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name.");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  //validate email
  if (email == "") {
    printError("emailErr", "Please enter your name.");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid name.");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  //validate mobile
  if (mobile == "") {
    printError("mobileErr", "Please enter your phone number.");
  } else {
    var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid phone number.");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  //validate country
  if (country == "Select") {
    printError("countryErr", "Please enter your country.");
  } else {
    if (country === false) {
      printError("countryErr", "Please enter a valid country.");
    } else {
      printError("countryErr", "");
      countryErr = false;
    }
  }

  //validate gender
  if (gender == "") {
    printError("genderErr", "Please enter your gender.");
  } else {
    if (gender === false) {
      printError("genderErr", "Please enter a gender.");
    } else {
      printError("genderErr", "");
      genderErr = false;
    }
  }

  if (nameErr || emailErr || mobileErr || countryErr || genderErr == true) {
    return false;
  } else {
    alert("You have submitted the form!");
  }
}

function printError(element, msg) {
  document.getElementById(element).innerHTML = msg;
}
