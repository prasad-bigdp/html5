document.getElementById("login").addEventListener("submit", login)
const lemail = document.getElementById("lem")
const lpwd = document.getElementById("lpwd")
function login(e) {
	e.preventDefault()

	let values = JSON.parse(localStorage.getItem("user"))
	console.log(values.email)
    console.log(values.pwd)
    console.log(lemail.value)
        console.log(lpwd.value)

    if ((lemail.value == values.email) && (lpwd.value == values.pwd))
    {
       window.location="http://www.amazon.com"
    }
    else
    {
        alert("invalid login detail")
    }
}