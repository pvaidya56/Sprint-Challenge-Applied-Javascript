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
const newArticleCard = document.querySelector('.cards-container');

const articleCard = axios.get('https://lambda-times-backend.herokuapp.com/articles')
articleCard
.then(data => {
    console.log(data)
    for(topic in data.data.articles) {
        data.data.articles[topic].forEach(article => {
            const newCard = ArticleCardComponent(article);
            newArticleCard.appendChild(createNewCard)
        });
    }
}
    })
    .catch( err => {
        // deal with the error in here
        console.log('There was an error: ', err)
    })

function ArticleCardComponent(article) {
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