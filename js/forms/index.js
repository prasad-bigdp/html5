const regForm = document.getElementById('regForm');
regForm.addEventListener('submit', regCall)
const name = document.getElementById('na')
const email = document.getElementById('em')



const pwd = document.getElementById('pwd')
const cpwd = document.getElementById('cpwd')
document.getElementById('eye').addEventListener('click', function ()
{
   if (pwd.type == "password")
   {
      pwd.type = "text"
      document.getElementById('eye').classList.remove('fa-eye')
      document.getElementById('eye').classList.add('fa-eye-slash')
   }
   else
   {
      pwd.type = "password"
      document.getElementById("eye").classList.add("fa-eye")
      document.getElementById("eye").classList.remove("fa-eye-slash")
   }
})
let emreg='/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/'
 function validation()
{   
     if (name.value.trim() === '')
     {
        document.getElementById("nameError").style.display='block'
        document.getElementById('nameError').textContent="Please enter the name"
    }
    if (!emreg.match(email.value))
    {
       document.getElementById("nameError").style.display = "block";
     document.getElementById("emailError").textContent = "Please enter valid email"  
    }
    if (!pwd.value.length >= 8)
    {
       document.getElementById("pwdError").style.display = "block";
					document.getElementById("pwdError").textContent =
						"Please enter password of minimum eight characters" 
    }
    if (cpwd.value !== pwd.value)
    {
        document.getElementById("cpwdError").style.display = "block"
				document.getElementById("cpwdError").textContent =
					"Please enter password of minimum eight characters" 
       }
   
}
function regCall(e)
{
   console.log(e)
   e.preventDefault();
   validation();
   let user = {
      name: name.value, email: email.value, pwd: pwd.value
   }
   localStorage.setItem("user",JSON.stringify(user))
   clearItems();
   
}
function clearItems ()
{
   name.value= ""
   email.value= ""
   pwd.value = ""
   cpwd.value=""
}
