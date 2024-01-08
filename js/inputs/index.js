const inpName = document.getElementById('name')
const inpEmail = document.getElementById("email")
const inpPassword = document.getElementById("password")

inpName.addEventListener('change', update)
inpEmail.addEventListener("change", update)
inpPassword.addEventListener("change", update)
function update (e)
{
    console.log("js")
    document.getElementById('results').textContent=e.target.value
    console.log(e.target.value)
}
document.getElementById("pswdBtn").addEventListener('click', function (e)
{
    console.log(e)
    if (e.target.innerText == "show")
    {
            inpPassword.type = "text"
            document.getElementById("pswdBtn").textContent="Hide"
        
    }
    else if (e.target.innerText == "Hide")
    {
        inpPassword.type = "password"
				document.getElementById("pswdBtn").textContent = "show"
        }
})