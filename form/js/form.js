//alert("JavaScript file connected");

window.addEventListener("load", function(){
    
    console.log("load entered");
    var submitBtn = document.getElementById("submit");
    console.log(submitBtn);
    
    submitBtn.addEventListener("click", submitForm);
    //console.log("not breaking");
    
    function submitForm(event){
        
        var submitF = true;
        
        
        //var firstNameData = document.getElementById("firstName").value; //long
        /*
        Instead of declaring a variable firstNameData could do below = shorthand
        firstName.value*/
        if(firstName.value === ""){
        
        //if(firstNameData === ""){           
           firstNameError.innerHTML = "Please enter a first name"; //shorthand
            
            document.getElementById("firstName").style.borderColor = "#f44242";
            document.getElementById("firstNameError").style.borderColor = "#f44242"; 
            submitF = false;
        }
        else{            
            firstName.style.borderColor = "#62f441";
            firstNameError.innerHTML = "&#10003;"
            firstNameError.style.borderColor = "#62f441";
            
        }
        
        
        
        
        if(lastName.value === ""){
        
        //if(firstNameData === ""){           
           lastNameError.innerHTML = "Please enter a last name"; //shorthand
            
            document.getElementById("lastName").style.borderColor = "#f44242";
            document.getElementById("lastNameError").style.borderColor = "#f44242"; 
            submitF = false;
        }
        else{            
            lastName.style.borderColor = "#62f441";
            lastNameError.innerHTML = "&#10003;"
            lastNameError.style.borderColor = "#62f441";
            
        }
        
        
        
        if(emailAddress.value === ""){
        
        //if(firstNameData === ""){           
           emailAddressError.innerHTML = "Please enter an email"; //shorthand
            
            document.getElementById("emailAddress").style.borderColor = "#f44242";
            document.getElementById("emailAddressError").style.borderColor = "#f44242";
            submitF = false;
        }
        else{            
            emailAddress.style.borderColor = "#62f441";
            emailAddressError.innerHTML = "&#10003;"
            emailAddressError.style.borderColor = "#62f441";
            
        }
        
           if(jobTitle.value === ""){
        
        //if(firstNameData === ""){           
           jobTitleError.innerHTML = "Please enter a job title"; //shorthand
            
            document.getElementById("jobTitle").style.borderColor = "#f44242";
            document.getElementById("jobTitleError").style.borderColor = "#f44242";
            submitF = false;
        }
        else{            
            jobTitle.style.borderColor = "#62f441";
            jobTitleError.innerHTML = "&#10003;"
            jobTitleError.style.borderColor = "#62f441";
            
        }
        
        
        if(date.value === ""){
        
        //if(firstNameData === ""){           
           dateError.innerHTML = "Please select a date"; //shorthand
            
            document.getElementById("date").style.borderColor = "#f44242";
            document.getElementById("dateError").style.borderColor = "#f44242";
            submitF = false;
        }
        else{            
            date.style.borderColor = "#62f441";
            dateError.innerHTML = "&#10003;"
            dateError.style.borderColor = "#62f441";
            
        }
        
        
        if(headline.value === ""){
        
        //if(firstNameData === ""){           
           headlineError.innerHTML = "Please enter a headline"; //shorthand
            
            document.getElementById("headline").style.borderColor = "#f44242";
            document.getElementById("headlineError").style.borderColor = "#f44242";
            submitF = false;
        }
        else{            
            headline.style.borderColor = "#62f441";
            headlineError.innerHTML = "&#10003;"
            headlineError.style.borderColor = "#62f441";
            
        }
        
        if(storyType.value === ""){
        
        //if(firstNameData === ""){           
           storyTypeError.innerHTML = "Please select a story type"; //shorthand
            
            document.getElementById("storyType").style.borderColor = "#f44242";
            document.getElementById("storyTypeError").style.borderColor = "#f44242";
            submitF = false;
        }
        else{            
            storyType.style.borderColor = "#62f441";
            storyTypeError.innerHTML = "&#10003;"
            storyTypeError.style.borderColor = "#62f441";
            
        }
        
        
        if(storyText.value === ""){
        
        //if(firstNameData === ""){           
           storyTextError.innerHTML = "Please select a story"; //shorthand
            
            document.getElementById("storyText").style.borderColor = "#f44242";
            document.getElementById("storyTextError").style.borderColor = "#f44242";
            submitF = false;
        }
        else{            
            storyText.style.borderColor = "#62f441";
            storyTextError.innerHTML = "&#10003;"
            storyTextError.style.borderColor = "#62f441";
            
        }
        
        
        
        
        
        
        
        
        
        console.log("test");
        console.log(event);
        
        if(submitF != true){
        event.preventDefault(); 
        }
        
  
    }
        
    
});