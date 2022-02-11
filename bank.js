

 document.getElementById("submit").addEventListener("click", function(){
  
    //Geting the email input value
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    //Geting the password input value
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    const currentEmail = "delwar@gmail.com";
    const currerntPassword = "delwar123";

    if(email == currentEmail && password == currerntPassword){
        window.location.href ="bank.html"
    }
    else{
        console.log("Your Email and password are incorrent.");
    }  
   
})  





