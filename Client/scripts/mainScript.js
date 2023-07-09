function displayCars(cars) {
    const carListElement = document.querySelector('.featured-car-list');
  
    cars.forEach(car => {
      const carItemElement = document.createElement('li');
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
              <button class="btn modalButton" id="modalButton">Rent now</button>
            </div>
          </div>
        </div>
      `;
  
      carListElement.appendChild(carItemElement);
    });
  }

function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.classList.toggle('active');
}

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

function openModal(carName) {
  const modalOverlay = document.querySelector('.modaloverlay');
  const modal = document.querySelector('.modal');
  const modalTitle = modal.querySelector('.modal-title');
  
  // Update the modal title with the car name
  modalTitle.textContent = carName;
  
  // Display the modal
  modalOverlay.style.display = 'block';

}

document.addEventListener('DOMContentLoaded', function() {
  // Get the necessary elements
  const modalButton = document.getElementById('modalButton');
  const modalOverlay = document.querySelector('.modaloverlay');
  const modal = document.querySelector('.modal');
  const closeButton = document.querySelector('.close');
  const confirmationPopup = document.getElementById('confirmationPopup');
  const confirmationMessage = document.getElementById('confirmationMessage');
  // const form = modal.querySelector('form');
  
  // Open the modal when "Rent now" button is clicked
  modalButton.addEventListener('click', function() {
    modalOverlay.style.display = 'block';
  });

  // Close the modal when the close button or outside the modal is clicked
  closeButton.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
  });
  modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });

  // Submit the form and show confirmation message
  form.addEventListener('submit', function(event) {
    event.preventDefault();

  // Reset the form after submission
  form.reset();

  // Show the confirmation message
  confirmationMessage.textContent = 'Thank you for registering. Your car has been booked. We will call you shortly.';
  confirmationPopup.style.display = 'block';

  // Close the modal after submission
  modalOverlay.style.display = 'none';

  // Close the confirmation popup after a certain duration
  setTimeout(function() {
    confirmationPopup.style.display = 'none';
    }, 5000);
  });
});


// JavaScript code

// const modalButton = document.querySelector('.modalButton');
// const modalOverlay = document.querySelector('.modaloverlay');
// const modal = document.querySelector('.modal');
// const closeButton = document.querySelector('.close');
// const confirmationPopup = document.getElementById('confirmationPopup');
// const confirmationMessage = document.getElementById('confirmationMessage');

// document.addEventListener('DOMContentLoaded', function() {
//   // Your JavaScript code here
//   const modalButton = document.querySelector('.modalButton');
//   const modalOverlay = document.querySelector('.modaloverlay');
//   const modal = document.querySelector('.modal');
//   const closeButton = document.querySelector('.close');
//   const confirmationPopup = document.getElementById('confirmationPopup');
//   // const confirmationMessage = document.getElementById('confirmationMessage');

//     // Open the modal when "Rent now" button is clicked
//     modalButton.addEventListener('click', function() {
//     modalOverlay.style.display = 'block';
//   });
//   function openModal() {
//     const modalOverlay = document.querySelector('.modaloverlay');
//     modalOverlay.style.display = 'block';
//   }
//     // Close the modal when close button or outside the modal is clicked
//     closeButton.addEventListener('click', function() {
//     modalOverlay.style.display = 'none';
//   });

//     // Submit the form and show confirmation message
//     modal.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     confirmationPopup.style.display = 'block';
    
//     // Here, you can perform additional actions like sending form data to the server
    
//     // Reset the form after submission
//     this.reset();
    
//     // Close the modal after submission
//     modalOverlay.style.display = 'none';

//     // Close the confirmation popup after a certain duration
//     setTimeout(function() {
//       confirmationPopup.style.display = 'none';
//     }, 5000);
//   });
// });


// // Close the confirmation popup after a certain duration
// setTimeout(function() {
//   confirmationPopup.style.display = 'none';
// }, 5000);

// });

// // Open the modal when "Rent now" button is clicked
//   modalButton.addEventListener('click', function() {
//   modalOverlay.style.display = 'block';
// });
// // Close the modal when close button or outside the modal is clicked
// closeButton.addEventListener('click', function() {
//   modalOverlay.style.display = 'none';
// });

// // Submit the form and show confirmation message
//   modal.querySelector('form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   confirmationPopup.style.display = 'block';
  
//   // Here, you can perform additional actions like sending form data to the server
  
//   // Reset the form after submission
//   this.reset();
  
//   // Close the modal after submission
//   modalOverlay.style.display = 'none';
// });

// // Close the confirmation popup after a certain duration
// setTimeout(function() {
//   confirmationPopup.style.display = 'none';
// }, 5000);

// new code
// const modalButton = document.querySelector(".modalButton");
// const modalOverlay = document.querySelector(".modaloverlay");
// const confirmationPopup = document.getElementById('confirmationPopup');
// const confirmationMessage = document.getElementById('confirmationMessage');
// const closeButton = document.querySelector(".close");

//     modalButton.addEventListener("click", function() {
//         modalOverlay.style.display = "block";
//     });

//     closeButton.addEventListener("click", function() {
//         modalOverlay.style.display = "none";
//     });
//     confirmationPopup.addEventListener("click", function() {
//         confirmationPopup.style.display = 'block';
//     });
//     confirmationMessage.addEventListener("click", function() {
//         confirmationMessage.style.display = 'block';
//     });
// // Clear the form and hide the popup
// modalOverlay.reset();
// modalOverlay.style.display = 'none';

// // confirmationPopup.style.display = 'block';
// confirmationMessage.textContent = 'Thank you for registering. Your car has been booked. We wil call you shortly.';
// confirmationPopup.style.display = 'block';