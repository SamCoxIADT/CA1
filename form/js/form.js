//alert("JavaScript file connected");

window.addEventListener("load", function() {

  console.log("load entered");
  var submitBtn = document.getElementById("submit");
  console.log(submitBtn);

  submitBtn.addEventListener("click", submitForm);
  //console.log("not breaking");

  function submitForm(event) {

    var submitF = true;


    //var firstNameData = document.getElementById("firstName").value; //long
    /*
    Instead of declaring a variable firstNameData could do below = shorthand
    firstName.value*/
    if (firstName.value === "") {

      //if(firstNameData === ""){
      firstNameError.innerHTML = "Please enter a first name"; //shorthand

      document.getElementById("firstName").style.borderColor = "#f44242";
      document.getElementById("firstNameError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      firstName.style.borderColor = "#62f441";
      firstNameError.innerHTML = "&#10003;"
      firstNameError.style.borderColor = "#62f441";

    }




    if (lastName.value === "") {

      //if(firstNameData === ""){
      lastNameError.innerHTML = "Please enter a last name"; //shorthand

      document.getElementById("lastName").style.borderColor = "#f44242";
      document.getElementById("lastNameError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      lastName.style.borderColor = "#62f441";
      lastNameError.innerHTML = "&#10003;"
      lastNameError.style.borderColor = "#62f441";

    }



    if (emailAddress.value === "") {

      //if(firstNameData === ""){
      emailAddressError.innerHTML = "Please enter an email"; //shorthand

      document.getElementById("emailAddress").style.borderColor = "#f44242";
      document.getElementById("emailAddressError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      emailAddress.style.borderColor = "#62f441";
      emailAddressError.innerHTML = "&#10003;"
      emailAddressError.style.borderColor = "#62f441";

    }

    if (amount.value === "") {

      //if(firstNameData === ""){
      amountError.innerHTML = "Please enter an amount"; //shorthand

      document.getElementById("amount").style.borderColor = "#f44242";
      document.getElementById("amountError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      amount.style.borderColor = "#62f441";
      amountError.innerHTML = "&#10003;"
      amountError.style.borderColor = "#62f441";

    }


    if (cardType.value === "") {

      //if(firstNameData === ""){
      cardTypeError.innerHTML = "Please select a card type"; //shorthand

      document.getElementById("cardType").style.borderColor = "#f44242";
      document.getElementById("cardTypeError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      cardType.style.borderColor = "#62f441";
      cardTypeError.innerHTML = "&#10003;"
      cardTypeError.style.borderColor = "#62f441";

    }



    if (cardNumber.value === "") {

      //if(firstNameData === ""){
      cardNumberError.innerHTML = "Please enter a number"; //shorthand

      document.getElementById("cardNumber").style.borderColor = "#f44242";
      document.getElementById("cardNumberError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      cardNumber.style.borderColor = "#62f441";
      cardNumberError.innerHTML = "&#10003;"
      cardNumberError.style.borderColor = "#62f441";

    }

    if (cvv.value === "") {

      //if(firstNameData === ""){
      cvvError.innerHTML = "Please enter a number"; //shorthand

      document.getElementById("cvv").style.borderColor = "#f44242";
      document.getElementById("cvvError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      cvv.style.borderColor = "#62f441";
      cvvError.innerHTML = "&#10003;"
      cvvError.style.borderColor = "#62f441";

    }



    if (date.value === "") {

      //if(firstNameData === ""){
      dateError.innerHTML = "Please select a date"; //shorthand

      document.getElementById("date").style.borderColor = "#f44242";
      document.getElementById("dateError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      date.style.borderColor = "#62f441";
      dateError.innerHTML = "&#10003;"
      dateError.style.borderColor = "#62f441";

    }


    if (destination.value === "") {

      //if(firstNameData === ""){
      destinationError.innerHTML = "Please enter a destination"; //shorthand

      document.getElementById("destination").style.borderColor = "#f44242";
      document.getElementById("destinationError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      destination.style.borderColor = "#62f441";
      destinationError.innerHTML = "&#10003;"
      destinationError.style.borderColor = "#62f441";

    }




    if (storyText.value === "") {

      //if(firstNameData === ""){
      storyTextError.innerHTML = "Please select a story"; //shorthand

      document.getElementById("storyText").style.borderColor = "#f44242";
      document.getElementById("storyTextError").style.borderColor = "#f44242";
      submitF = false;
    } else {
      storyText.style.borderColor = "#62f441";
      storyTextError.innerHTML = "&#10003;"
      storyTextError.style.borderColor = "#62f441";

    }









    console.log("test");
    console.log(event);

    if (submitF != true) {
      event.preventDefault();
    }


  }


});
