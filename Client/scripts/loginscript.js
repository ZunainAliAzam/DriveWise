const forms = document.querySelector(".forms"),
pwShowHide=document.querySelectorAll(".eye-icon"),
links=document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon=> {
        eyeIcon.addEventListener("click", ()=> {
                let pwFields=eyeIcon.parentElement.parentElement.querySelectorAll(".password");

                pwFields.forEach(password=> {
                        if(password.type==="password") {
                            password.type="text";
                            eyeIcon.classList.replace("bx-hide", "bx-show");
                            return;
                        }

                        password.type="password";
                        eyeIcon.classList.replace("bx-show", "bx-hide");
                    })
            })

    }) 
    links.forEach(link=> {
        link.addEventListener("click", e=> {
                e.preventDefault(); //preventing form submit
                forms.classList.toggle("show-signup");
            })
    })
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Perform login authentication
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

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

        .then(response =>{
                response.json(),
                window.location.href = "mainIndex.html";
        })
        .then(responseData => {
        console.log(responseData);
        // Do something with the response data
        })
        .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
        });
        // Navigate to mainIndex.html if login is successful
       
           
        
    });