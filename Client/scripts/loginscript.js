// const forms = document.querySelector(".forms"),
// pwShowHide=document.querySelectorAll(".eye-icon"),
// links=document.querySelectorAll(".link");

// pwShowHide.forEach(eyeIcon=> {
//         eyeIcon.addEventListener("click", ()=> {
//                 let pwFields=eyeIcon.parentElement.parentElement.querySelectorAll(".password");

//                 pwFields.forEach(password=> {
//                         if(password.type==="password") {
//                             password.type="text";
//                             eyeIcon.classList.replace("bx-hide", "bx-show");
//                             return;
//                         }

//                         password.type="password";
//                         eyeIcon.classList.replace("bx-show", "bx-hide");
//                     })
//             })

//     }) 
//     links.forEach(link=> {
//         link.addEventListener("click", e=> {
//                 e.preventDefault(); //preventing form submit
//                 forms.classList.toggle("show-signup");
//             })
//     })
//     document.getElementById("loginForm").addEventListener("submit", function(e) {
//         e.preventDefault(); // Prevent form submission
        
//         // Perform login authentication
//         var email = document.getElementById("email").value;
//         var password = document.getElementById("password").value;

//         login(email, password);
//         // Navigate to mainIndex.html if login is successful
       
//         //     window.location.href = "mainIndex.html";
//         });

//         async function login(email, password) {
//                 const loginData = {
//                   email: email,
//                   password: password
//                 };
              
//                 try {
//                   const response = await fetch('http://your-pythonanywhere-api-endpoint', {
//                     method: 'POST',
//                     headers: {
//                       'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(loginData)
//                   });
              
//                   if (response.ok) {
//                     const data = await response.json();
//                     const token = data.token;
              
//                     // Store the token securely (e.g., in cookies or local storage)
//                     localStorage.setItem('token', token);
              
//                     // Redirect or perform other actions for successful login
//                     window.location.href = ".mainIndex.html";
//                   } else {
//                     // Handle error responses from the API
//                     const errorData = await response.json();
//                     console.log(errorData.error);
//                   }
//                 } catch (error) {
//                   // Handle network errors
//                   console.log('Error:', error.message);
//                 }
//               }              

const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
                let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

                pwFields.forEach(password => {
                        if (password.type === "password") {
                                password.type = "text";
                                eyeIcon.classList.replace("bx-hide", "bx-show");
                                return;
                        }

                        password.type = "password";
                        eyeIcon.classList.replace("bx-show", "bx-hide");
                });
        });
});

links.forEach(link => {
        link.addEventListener("click", e => {
                e.preventDefault(); // Preventing form submit
                forms.classList.toggle("show-signup");
        });
});

document.querySelector('.form.signup form').addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
      
        // Perform signup authentication
        var name = document.getElementById("name").value;
        var email = document.getElementById("signupEmail").value;
        var password = document.getElementById("signupPassword").value;
        var phone_number = document.getElementById("phone_number").value;
        var address = document.getElementById("address").value;       
      
        signup(name, email, password, phone_number, address);
      });
      
      function signup(name, email, password, phone_number, address) {
        console.log('Hello signup');
      
        const url = 'http://zunainazam1865.pythonanywhere.com/signup/';
        const data = {
          name: name,
          email: email,
          password: password,
          phone_number: phone_number,
          address: address
        };
      
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
          if (responseData.token === "201") {
            // Store the token securely (e.g., in cookies or local storage)
            localStorage.setItem('token', responseData.token);
            if(responseData.message === 'Signup Successful'){
                // Show signup success message
                const successMessageElement = document.getElementById('successMessage');
                successMessageElement.textContent = "Signup successful.";
                
                //redirect to the login page
                setTimeout(()=> {
                        window.location= "loginForm"; // Redirect to mainIndex.html if signup is successful
                        },10000);
                }
        } else {
            // Handle unsuccessful signup
            const errorMessageElement = document.getElementById('errorMessage');
            errorMessageElement.textContent = "Signup unsuccessful. Please try again.";
      
            // Clear the error message after a certain duration (optional)
            setTimeout(() => {
              errorMessageElement.textContent = "";
            }, 60000); // Clear after 60 seconds (adjust as needed)
          }
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occurred during the request
        });
      }
      

document.querySelector('.form.login form').addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        // Perform login authentication
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        login(email, password);
});

function login(email, password) {
        console.log('Hello login');

        const url = 'http://zunainazam1865.pythonanywhere.com/login/';
        const data = {
                email: email,
                password: password
        };

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
                        // if (responseData.status === 'success') {
                        //         window.location.replace("mainIndex.html") ; // Redirect to mainIndex.html if login is successful
                        // } else {
                        //         // Handle unsuccessful login
                        //         console.log("Login unsuccessful");
                        // }
                        if (responseData.token) {
                                // Store the token securely (e.g., in cookies or local storage)
                                localStorage.setItem('token', responseData.token);
                                window.location.href = "mainIndex.html"; // Redirect to mainIndex.html if login is successful
                              } else {
                                // Handle unsuccessful login
                                console.log("Login unsuccessful");
                                const errorMessageElement = document.getElementById('errorMessage');
                                errorMessageElement.textContent = "Incorrect email or password";

                                // Clear the error message after a certain duration (optional)
                                setTimeout(() => {errorMessageElement.textContent = "";}, 60000); // Clear after 5 seconds (adjust as needed)
                                }
                              })
                .catch(error => {
                        console.error('Error:', error);
                        // Handle any errors that occurred during the request
                });
}