let carid;
async function onRent(id){
  carid=id;
  await  saveCarID(id);
  openModal();
  };
 
  async function onConfirm(){
    console.log('Hello confirm registration');
    const cnic=document.getElementById("cnic").value;
    const start_date=document.getElementById("start-date").value;
    const end_date=document.getElementById("end-date").value;
    console.log(start_date)

    const url = 'http://zunainazam1865.pythonanywhere.com/carverification/';
    const data = {
      car_id: carid,
      cnic_no:cnic,
      rental_start_date:start_date,
      rental_end_date:end_date
    };
  console.log(data)
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
    if(responseData.message === 'Car registration updated successfully'){
      console.log("Registration updated successfully");
          
    } else {
        console.log("Registration Unsuccessful. Please try again.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle any errors that occurred during the request
    });
  }

function displayCars(cars) {
  console.log(cars)
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
              <button class="btn modalButton rentNowButton" onclick="onRent(${car.id})">Rent now</button>

            </div>
          </div>
        </div>
      `;
  
      carListElement.appendChild(carItemElement);
  });
}

function openModal() {
  console.log('open modal')
  document.querySelector('.modalOverlay').style.display = 'block';
}

function submitForm(event) {
  event.preventDefault();
  document.querySelector('.modalOverlay').style.display = 'none';
  document.getElementById('confirmationPopup').style.display = 'block';

  setTimeout(function() {
    document.getElementById('confirmationPopup').style.display = 'none';
  }, 3000);
}

const confirmBtn = document.getElementById('confirm-btn');
confirmBtn.addEventListener('click',submitForm);

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
  const token= localStorage.getItem('token');
  console.log('start');
  await fetch('http://zunainazam1865.pythonanywhere.com/carregistration/', {
    method: 'POST',
    mode:'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    mode:'cors',
    body: JSON.stringify({ car_id: carID, token})

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

// Get a reference to the "Sign Out" link element
const signOutLink = document.getElementById('signout');

// Add an event listener to the link
signOutLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Call the logout function
  logout();
});
