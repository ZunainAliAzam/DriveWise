// // Get the button and modal elements
// const modalButton = document.getElementById("modalButton");
// const modal = document.getElementById("myModal");

// // Get the close button element inside the modal
// const closeButton = modal.querySelector(".close");

// // Function to open the modal
// function openModal() {
//   modal.style.display = "block";
// }

// // Function to close the modal
// function closeModal() {
//   modal.style.display = "none";
// }

// // Event listener for the button click
// modalButton.addEventListener("click", openModal);

// // Event listener for the close button click
// closeButton.addEventListener("click", closeModal);

window.addEventListener("load", function () {
    loadCars();
});

function loadCars() {
  const url = 'http://zunainazam1865.pythonanywhere.com/getcar/';

  fetch(url)
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

function displayCars(cars) {
    const carListElement = document.querySelector('.featured-car-list');
  
    cars.forEach(car => {
      const carItemElement = document.createElement('li');
      carItemElement.innerHTML = `
        <div class="featured-car-card">
          <figure class="card-banner">
            <img src="http://zunainazam1865.pythonanywhere.com${car.car_pic}" alt="${car.car_name}" loading="lazy" width="440" height="300" class="w-100">
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
              <button class="btn">Rent now</button>
            </div>
          </div>
        </div>
      `;
  
      carListElement.appendChild(carItemElement);
    });
  }
  

// new code
const modalButton = document.querySelector(".modalButton");
const modalOverlay = document.querySelector(".modaloverlay");
const confirmationPopup = document.getElementById('confirmationPopup');
const confirmationMessage = document.getElementById('confirmationMessage');
const closeButton = document.querySelector(".close");

    modalButton.addEventListener("click", function() {
        modalOverlay.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        modalOverlay.style.display = "none";
    });
    confirmationPopup.addEventListener("click", function() {
        confirmationPopup.style.display = 'block';
    });
    confirmationMessage.addEventListener("click", function() {
        confirmationMessage.style.display = 'block';
    });
// Clear the form and hide the popup
modalOverlay.reset();
modalOverlay.style.display = 'none';


// modalButton.addEventListener("click", function() {
//     modal.style.display = "block";
// });

// const closeButtons = document.querySelectorAll(".close");
// closeButtons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         modal.style.display = "none";
//     });
// });

// confirmationPopup.style.display = 'block';
confirmationMessage.textContent = 'Thank you for registering. Your car has been booked. We wil call you shortly.';
confirmationPopup.style.display = 'block';