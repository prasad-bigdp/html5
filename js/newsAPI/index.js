const apiKey = "17c84ecf9db94dd4bc8e0aac9a23cc4e"

const mainDiv = document.getElementById('results')
async function fetchData (url)
{
    try
    {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        if (data.status == "ok")
        {
            displayData(data.articles)
        }
        else
        {
            console.log("elements not found")
            }
        
    }
    catch (err)
    {
        console.error(err)
    }
}
function displayData (data)
{
    data.forEach(function (n)
    {
        const div = document.createElement('div')
        div.classList.add('news-article')
        const nimg = document.createElement('img')
        nimg.src = n.urlToImage;
        nimg.alt= n.title
        const ntitle = document.createElement('h2')
        ntitle.textContent= n.title
        const nsource = document.createElement('p')
        nsource.textContent= n.source.name
        const ncontent = document.createElement('p')
        ncontent.textContent=n.description
        const link = document.createElement('a')
        link.href = n.url;
        link.target = "_blank"
        link.textContent="Read More"
        div.append(nimg, ntitle, nsource, ncontent, link)
        mainDiv.appendChild(div)
    })

}
fetchData(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)