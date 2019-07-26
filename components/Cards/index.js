// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('http://serverlocation.com/data')
    .then( response => {
        // deal with the response data in here
    })
    .catch( err => {
        // deal with the error in here
    })

function newArticleCard(article) {
    const card = document.createElement('div');
    card.classList.add('card');
    const headline = document.createElement('div');
    headline.classList.add('headline');
    const author = document.createElement('div');
    author.classList.add('author');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');
    return card;  
}