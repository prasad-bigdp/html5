const Input = document.getElementById('display');
let displayVal = '';
function addToDisplay (val)
{
    displayVal+=val
    Input.value = displayVal;
}
function clear ()
{
    displayVal = '';
    Input.value = '';

}
function equals ()
{
    try
    {//1+2
      const result = eval(displayVal);
    Input.value = result;
    displayVal = result.toString();  
    }
    catch(error)
    {
         Input.value = error
        displayVal = '';
    }
    
}
document.addEventListener('keydown', function (event)
{
    const target = event.key;
    const reg= /[0-9\+\-\*\/\n]/
    if (reg.test(target))
    {
        addToDisplay(target)
    }
    if (target === 'Enter')
    {
        equals();
    }
    if (target === 'Delete')
    {
        clear();
        }
    
})