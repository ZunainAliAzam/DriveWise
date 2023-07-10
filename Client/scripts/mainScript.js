function displayCars(cars) {
    const carListElement = document.querySelector('.featured-car-list');
  
    cars.forEach(car => {
      const carItemElement = document.createElement('li');
      carItemElement.id = "carid";
      carItemElement.innerHTML = `
        <div class="featured-car-card">
          <figure class="card-banner">
            <img src="http://zunainazam1865.pythonanywhere.com${car.car_pic}" alt="${car.car_name}" width="440" height="300" class="w-100">
          </figure>
          <div class="card-content">
            <div class="card-title-wrapper">
              <h3 class="h3 card-title">
                <a>${car.car_name}</a>
              </h3>
              <data class="year" value="${car.car_year}">${car.car_year}</data>
            </div>
            <ul class="card-list">
              <li class="card-list-item">
                <ion-icon name="people-outline"></ion-icon>
                <span class="card-item-text">${car.no_of_person} People</span>
              </li>
              <li class="card-list-item">
                <ion-icon name="flash-outline"></ion-icon>
                <span class="card-item-text">${car.car_type}</span>
              </li>
              <li class="card-list-item">
                <ion-icon name="speedometer-outline"></ion-icon>
                <span class="card-item-text">${car.car_mileage}</span>
              </li>
              <li class="card-list-item">
                <ion-icon name="hardware-chip-outline"></ion-icon>
                <span class="card-item-text">${car.car_mode}</span>
              </li>
            </ul>
            <div class="card-price-wrapper">
              <p class="card-price">
                <strong>Rs ${car.price}</strong> / month
              </p>
              <button class="btn fav-btn" aria-label="Add to favourite list">
                <ion-icon name="heart-outline"></ion-icon>
              </button>
              <button class="btn modalButton rentNowButton">Rent now</button>
            </div>
          </div>
        </div>
      `;
  
      carListElement.appendChild(carItemElement);

    // const rentButton = carItemElement.querySelectorAll('.modalButton');
    // rentButton.addEventListener('click', openModal);
    // });

    // const rentButtons = document.querySelectorAll('.modalButton');
    // rentButtons.forEach(button => {
    //   button.addEventListener('click', openModal);
  });
}

// function openModal() {
//   document.getElementById('modalOverlay').style.display = 'block';
// }

// function submitForm(event) {
//   event.preventDefault();
//   document.getElementById('modalOverlay').style.display = 'none';
//   document.getElementById('confirmationPopup').style.display = 'block';
// }

function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.classList.toggle('active');
}

async function loadCars() {
  const url = 'http://zunainazam1865.pythonanywhere.com/getcar/';

await fetch(url)
    .then(response => response.json())
    .then(data => {
      // Process the car data and display it on the webpage
      displayCars(data);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    });
}

async function logout() {
  // const token = localStorage.getItem('token'); // Get the token from localStorage
  const token = localStorage.getItem('token');
  // Make an API request to log out the user
await  fetch('http://zunainazam1865.pythonanywhere.com/logout/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}` // Include the token in the request headers
    },
    // mode: 'cors',
    body: JSON.stringify({ token: token })
  })
    .then(response => {
      if (response.ok) {
        // Logout successful, delete the token from localStorage
        localStorage.removeItem('token');

        // Redirect to the homepage
        window.location.href = 'index.html';
      } else {
        // Handle logout failure
        console.error('Logout failed');
      }
    })
    .catch(error => {
      // Handle any error that occurred during the request
      console.error('Error:', error);
    });
}

async function saveCarID(carID) {
  console.log('start');
  await fetch('http://zunainazam1865.pythonanywhere.com/carregistration/', {
    method: 'POST',
    mode:'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    mode:'cors',
    body: JSON.stringify({ car_id: carID })
  })
  .then(response => {
    if (response.ok) {
      console.log('Car ID saved successfully');

    } else {
      console.error('Failed to save car ID');
    }
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
}

console.log('1');

window.addEventListener("load",async function () {
  await loadCars();
});
console.log('2');

// const rentNowButton = document.querySelectorAll(".rentNowButton");
// console.log(rentNowButton);
// rentNowButton.addEventListener("click", function() {
//   var carID = ""; // Replace with the actual car ID
  
//   saveCarID(carID);
// });

const rentNowButtons = document.querySelectorAll(".rentNowButton");
rentNowButtons.forEach(button => {
  button.addEventListener("click", function() {
    var carID = ""; // Replace with the actual car ID
    console.log("aese he kuch");
    saveCarID(carID);
  });
});

// Get a reference to the "Sign Out" link element
const signOutLink = document.getElementById('signout');

// Add an event listener to the link
signOutLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Call the logout function
  logout();
});

var container = document.querySelector(".featured-car-list");
console.log(container);
      container.addEventListener("click", function(event) {
        var target = event.target;
        if (target.tagName === "LI") {
          console.log("target.textContent"); // Output: "Item x" (depending on which li was clicked)
        }
      });

// Assuming you have an element with id "myElement" that contains the button in its innerHTML
var element = document.getElementById("carid");
var htmlContent = element.innerHTML;

// Create a temporary div element and set the innerHTML
var tempDiv = document.createElement("div");
tempDiv.innerHTML = htmlContent;

// Access the button element from the parsed HTML
var button = tempDiv.querySelector(".btn");

// Now you have access to the button element and can perform operations on it
console.log(button); // Output: <button>Button</button>
