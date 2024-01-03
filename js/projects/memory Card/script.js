const cardData = ["&#x1F602;", "&#x1F60E;", "&#x1F60D;", "&#x1F61C;", "&#x1F643;", "&#x1F913;", "&#x1F602;", "&#x1F60E;", "&#x1F60D;", "&#x1F61C;", "&#x1F643;", "&#x1F913;"]
function createCard (card,index)
{
    const cardElement = document.createElement('div');
    cardElement.classList.add('mcard');
    cardElement.dataset.memory = card;
    cardElement.dataset.index = index;
        

    return cardElement;
}
function shuffleCards ()
{
    for (j = cardData.length - 1; j > 0; j--)
    {
        const i = Math.floor(Math.random() * (j + 1));
        [cardData[j],cardData[i]]=[cardData[i],cardData[j]]
        }

}
let firstCard=null, secondCard=null;
let flippedCard=true;
function startGame ()
{
    shuffleCards();
    cardData.forEach((card,index) =>
    {
        const cardEle = createCard(card,index);
        const gameBoard = document.getElementById("memory-card");
        gameBoard.appendChild(cardEle);
        cardEle.addEventListener('click',()=>flipCard(cardEle))
    })
}
function flipCard (card)
{
    if (!flippedCard || card === firstCard)
    { return; }
    card.innerHTML = card.dataset.memory;
    if (!firstCard)
    {
        firstCard = card;
        return;
    }
    if (!secondCard)
    {
        secondCard = card;
        if (firstCard.dataset.memory === secondCard.dataset.memory)
        {
            firstCard.removeEventListener("click", () => flipCard(firstCard))
            secondCard.removeEventListener("click", () => flipCard(firstCard))
            firstCard = null;
            secondCard = null;
        }
        else
        {
            flippedCard = false;
            setTimeout(() =>
            {
                firstCard.textContent = "";
                secondCard.textContent = "";
                firstCard = null
                secondCard = null;
                flippedCard = true;
            },1000)
            }
        
        }







}
startGame()