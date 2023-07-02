const loginButton = document.getElementById("login-button");

// Add a click event listener to the login button
loginButton.addEventListener("click", function() {
  // Redirect to the login page
  window.location.href = "login.html";
});
//  Function to handle login
// async function login(email, password) {
//   const loginData = {
//     email: email,
//     password: password
//   };

//   try {
//     const response = await fetch('http://zunainazam1865.pythonanywhere.com/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(loginData)
//     });

//     if (response.ok) {
//       const data = await response.json();
//       const token = data.token;

//       // Store the token securely (e.g., in cookies or local storage)
//       localStorage.setItem('token', token);

//       // Redirect or perform other actions for successful login
//       // e.g., window.location.href = '/dashboard.html';
//     } else {
//       // Handle error responses from the API
//       const errorData = await response.json();
//       console.log(errorData.error);
//     }
//   } catch (error) {
//     // Handle network errors
//     console.log('Error:', error.message);
//   }
// }

// // Example usage
// login('zunain@gmail.com', '123');

// const url = 'http://zunainazam1865.pythonanywhere.com/login/';
// const data = {
//   email: 'zunain@gmail.com',
//   password: '123'
// };

// fetch(url, {
//   method: 'POST',
//   mode: 'cors',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': 'http://127.0.0.1:5500' // Replace '*' with the appropriate origin if needed
//   },
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(responseData => {
//     console.log(responseData);
//     // Do something with the response data
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle any errors that occurred during the request
// });

// const url = 'http://zunainazam1865.pythonanywhere.com/login/';
// const data = {
//   email: 'zunain@gmail.com',
//   password: '123'
// };

// fetch(url, {
//   method: 'POST',
//   mode: 'cors',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })
//   .then(response => response.json())
//   .then(responseData => {
//     console.log(responseData);
//     // Do something with the response data
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle any errors that occurred during the request
// });