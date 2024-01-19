const mainDiv = document.getElementById('results');

let count = 0;
fetchData('https://dummyjson.com/products');
function fetchData (url)
{
    fetch(url)
        .then((res) => res.json() )
        .then((data)=>displayData(data.products))
        .catch(function (error)
        {
            console.error(error)
        })
    
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
        // btn.addEventListener('click', incr)
        btn.onclick=priceUpdate(pro)
        product.append(img, title, category, price, btn);
        mainDiv.appendChild(product)
    });
}