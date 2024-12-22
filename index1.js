const loginBtn  = document.querySelector("#login");
const registerBtn = document.querySelector("#Register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', ()=> {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255,255,255,0.2)";
    loginForm.style.left = "50%";
    registerForm.style.left = "-50%"
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
})

registerBtn.addEventListener('click', ()=> {
    loginBtn.style.backgroundColor = "rgba(255,255,255,0.2)";
    registerBtn.style.backgroundColor = "#21264D"; 
    loginForm.style.left = "150%";
    registerForm.style.left = "50%"
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";

})
const inName = document.getElementById("inNameId");
const inPassword = document.getElementById("inPasswordId");
function printHello(){
    const username = inName.value.trim();
    const password = inPassword.value.trim();
    if(username===""){
        inName.classList.add('error');
    }else{
        inName.classList.remove('error');
        inName.classList.add('success');
    }
    if(password===""){
        inPassword.classList.add('error');
    }else{
        inPassword.classList.remove('error');
        inPassword.classList.add('success');
    }
    if(username!="" && password!=""){
        inName.classList.remove('error');
        inPassword.classList.remove('error');
        alert("Successfully Signed In");
        alert("Created by Veda And Jaanu");
    }
}
const btn1 = document.getElementById("signInBtn");
btn1.addEventListener("click",printHello);


function printHello2(){
    const upName = document.getElementById("upNameId");
    const upPassword = document.getElementById("upPasswordId");
    const upEmail = document.getElementById("upEmailId");
    const username = upName.value.trim();
    const password = upPassword.value.trim();
    const email = upEmail.value.trim();
    if(username===""){
        upName.classList.add('error');
    }else{
        upName.classList.remove('error');
        upName.classList.add('success');
    }
    if(password===""){
        upPassword.classList.add('error');
    }else{
        upPassword.classList.remove('error');
        upPassword.classList.add('success');
    }
    if(email===""){
        upEmail.classList.add('error');
    }else{
        upEmail.classList.remove('error');
        upEmail.classList.add('success');
    }
    if(username!="" && password!="" && email!=""){
        upName.classList.remove('success');
        upPassword.classList.remove('success');
        upEmail.classList.remove('success');
        alert("Successfully Account Created");
        alert("Created by Veda and Jaanu");
    }
}
const btn2 = document.getElementById("signUpBtn");
btn2.addEventListener("click",printHello2);