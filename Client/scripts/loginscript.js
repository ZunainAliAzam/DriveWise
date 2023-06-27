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

        // Navigate to mainIndex.html if login is successful
       
            window.location.href = "mainIndex.html";
        
    });