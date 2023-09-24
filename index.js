

  // validdatePassword 
function validatePasswords()
{
  const password = document.getElementsByClassName("password")[0]
  const password1 = document.getElementsByClassName("password")[1]
  const passwordDontMatch = document.querySelector(".password_dont_match")
    if(password.value != password1.value) 
    {
      // add class
      password.classList.add("valid")
      password1.classList.add("valid")
      passwordDontMatch.style.opacity = 1
      passwordDontMatch.style.display= "block"
      // remove class
      password.classList.remove("invalid");
      password1.classList.remove("invalid");
    }else{ 
        // add class 
       password.classList.add("invalid");
       password1.classList.add("invalid");
      passwordDontMatch.style.opacity = 0
       //remove class
       password.classList.remove("valid");
       password1.classList.remove("valid");
    }

}