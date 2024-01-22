const mainDiv = document.getElementById('results');

let count = 0;
fetchData('https://dummyjson.com/products');
async function fetchData (url)
{
    // fetch(url)
    //     .then((res) => res.json() )
    //     .then((data)=>displayData(data.products))
    //     .catch(function (error)
    //     {
    //         console.error(error)
    //     })
    try
    {
         const res = await fetch(url);
    const data = await res.json();
    displayData(data.products)
    }
    catch (err)
    {
        console.error(err)
    }
   


    
}
function priceUpdate (p)
{
    console.log(p.price)
}
const incr= ()=>
{
    count++;
    document.querySelector("#cart>span").textContent = count
}
const maindivAlert = (t) =>
{
    console.log(t)
}
const displayData =(products)=>
{
    products.forEach(function (pro)
    {
        const product = document.createElement('div')
        product.classList.add('product')
        const img = document.createElement('img');
        img.setAttribute('src', pro.images[0])
        img.alt = "image"
        const title = document.createElement('h2')
        title.textContent = pro.title
        const price = document.createElement('p')
        price.textContent = "Price: $" + pro.price
        const category = document.createElement('p')
        category.textContent = "Category:" + pro.category;
        const btn = document.createElement('button')
        btn.textContent = "Add to Cart"
        btn.addEventListener('click', maindivAlert(pro.title))
        product.append(img, title, category, price, btn);
        mainDiv.appendChild(product)
    });
}