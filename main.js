// // Password visibility in the forms

// var passwordLogin = document.querySelector("#password2");
// var passwordField = document.querySelector(".password");
// var passwordFieldConfirm = document.querySelector(".password_confirm");
// var showLogin = document.querySelector(".showLogin");
// var hideLogin = document.querySelector(".hideLogin");
// var show = document.querySelector(".show");
// var hide = document.querySelector(".hide");


// // Register form

// show.onclick = function(){
//     passwordField.setAttribute("type", "text");
//     passwordFieldConfirm.setAttribute("type", "text");
//     show.style.display = "none";
//     hide.style.display = "block";
// }

// hide.onclick = function(){
//     passwordField.setAttribute("type", "password");
//     passwordFieldConfirm.setAttribute("type", "password");
//     hide.style.display = "none";
//     show.style.display = "block";
// }


// // Login form

// showLogin.onclick = function(){
//     passwordLogin.setAttribute("type", "text");
//     showLogin.style.display = "none";
//     hideLogin.style.display = "block";
// }

// hideLogin.onclick = function(){
//     passwordLogin.setAttribute("type", "password");
//     hideLogin.style.display = "none";
//     showLogin.style.display = "block";
// }
window.addEventListener('DOMContentLoaded',()=>{
    // get all toggle-pass class elements
    const passwordFields = document.querySelectorAll('.toggle-pass')

    // loop throw each element and add an event listener on click
    passwordFields.forEach(passwordField=>{
        passwordField.addEventListener('click',(e)=>{

           const currentIcon = e.target
            // if password is hidden, toggle the icon 
            // and set parent input type to text
            if(currentIcon.classList.contains('fa-eye-slash')){
                currentIcon.classList.replace('fa-eye-slash', 'fa-eye');
                currentIcon.parentElement.children[0].setAttribute('type','text')
            }
            else{
                // if password is visible, toggle the icon 
                // and set parent input type to password
                currentIcon.classList.replace('fa-eye','fa-eye-slash' )
                currentIcon.parentElement.children[0].setAttribute('type','password')
            }
            
        })
    })
})