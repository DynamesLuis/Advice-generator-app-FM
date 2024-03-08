const URL_API = 'https://api.adviceslip.com/advice';
const diceBtn = document.querySelector('main button');
const quoteElement = document.querySelector('main p');
const idElement = document.querySelector('h1 span');

diceBtn.addEventListener('click', getAdvice);

async function getAdvice() {
    try {
        const response = await fetch(URL_API);
        const quote = await response.json();
        quoteElement.textContent = `"${quote.slip.advice}"`;
        idElement.textContent = quote.slip.id;
    } catch (error) {
        alert(error);
    }
}