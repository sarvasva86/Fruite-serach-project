const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const dropdown = document.getElementById('dropdown')

const fruits = [
    'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
    'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 
    'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 
    'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 
    'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 
    'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 
    'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 
    'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 
    'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 
    'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 
    'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 
    'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 
    'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 
    'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 
    'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];


/*function search(str) {
    let results = [];
    const searchTerm = str.toLowerCase();

    // Filter fruits based on user input
    results = fruits.filter(fruit => fruit.toLowerCase().includes(searchTerm));

    return results;
}
*/


function search() {
  const input = searchInput.value.toLowerCase();
  dropdown.innerHTML = '';  // Clear any previous results

  if (input === '') {
    dropdown.classList.remove('active');  // Hide dropdown if input is empty
    return;
  }

  const results = fruits.filter(fruit => fruit.toLowerCase().includes(input));

  if (results.length > 0) {
    dropdown.classList.add('active');  // Show dropdown
    results.forEach(fruit => {
      const fruitItem = document.createElement('div');
      fruitItem.textContent = fruit;
      fruitItem.classList.add('dropdown-item');
      dropdown.appendChild(fruitItem);

      // Add a click event listener to each fruit item
      fruitItem.addEventListener('click', function() {
        searchInput.value = fruit;
        dropdown.innerHTML = '';  // Clear dropdown once an item is selected
        dropdown.classList.remove('active');
      });
    });
  } else {
    dropdown.classList.remove('active');  // Hide dropdown if no matches
  }
}



function searchHandler(e) {
    const inputVal = e.target.value;  // Get the current input value
    const results = search(inputVal);  // Call the search function to get matching results
    
    showSuggestions(results, inputVal);  // Display the results
}


function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';  // Clear any existing suggestions

    if (results.length > 0 && inputVal !== '') {
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            suggestions.appendChild(li);  // Add each result as a list item
        });
    }
}


function useSuggestion(e) {
    if (e.target.tagName === 'LI') {  // Check if a list item was clicked
        input.value = e.target.textContent;  // Set the clicked suggestion as the input value
        suggestions.innerHTML = '';  // Clear the suggestions after selecting
    }
}


// Event listeners
input.addEventListener('keyup', searchHandler);

// Highlight dropdown items on hover
dropdown.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('dropdown-item')) {
      event.target.style.backgroundColor = '#f0f0f0';
    }
  });
  
  dropdown.addEventListener('mouseout', function(event) {
    if (event.target.classList.contains('dropdown-item')) {
      event.target.style.backgroundColor = '';
    }
  });
