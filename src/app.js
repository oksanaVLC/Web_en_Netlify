import Fuse from 'fuse.js';

// Step 1: Load the recipes data
const recipes = require('./recipes.json'); // If you're using Node.js, you can import the JSON directly

// Step 2: Set up Fuse.js options
const options = {
  includeScore: true,
  keys: ['title', 'ingredients', 'description'], // The fields you want to search
};

const fuse = new Fuse(recipes, options);

// Step 3: Handle the search functionality
const searchBar = document.getElementById('searchBar');
const resultsContainer = document.getElementById('results');

searchBar.addEventListener('input', () => {
  const query = searchBar.value;
  const results = fuse.search(query);
  
  displayResults(results);
});

// Step 4: Display the results in the DOM
function displayResults(results) {
  resultsContainer.innerHTML = ''; // Clear previous results
  
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = `${result.item.title} - ${result.item.description}`;
    resultsContainer.appendChild(li);
  });
}

import 'animate.css';
