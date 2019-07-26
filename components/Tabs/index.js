// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabComponent = document.querySelector('.topics');
const tab = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    tab
    .then(data => {
        data.data.topics.forEach(item => {
            const newTopic = newTopicComponent(item);
            tabComponent.appendChild(newTopic);
        })
      
    })
    .catch( err => {
        // deal with the error in here
        console.log('There was an error: ', err);
    })


function newTopic(topic) {
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = topic;
    return newTab;
}