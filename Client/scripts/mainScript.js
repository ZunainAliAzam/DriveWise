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