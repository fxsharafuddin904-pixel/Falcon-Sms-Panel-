//====================================
// FALCON PANEL
// SCRIPT PART 1
//====================================

const home=document.getElementById("home");
const login=document.getElementById("login");
const service=document.getElementById("service");
const finalPage=document.getElementById("final");

function showPage(page){

home.classList.remove("active");
login.classList.remove("active");
service.classList.remove("active");
finalPage.classList.remove("active");

page.classList.add("active");

window.scrollTo(0,0);

}

// HOME → LOGIN

document.getElementById("startBtn").onclick=function(){

this.style.transform="scale(.90)";

setTimeout(()=>{

showPage(login);

this.style.transform="scale(1)";

},300);

};

// LOGIN → HOME

document.getElementById("backHome").onclick=function(){

showPage(home);

};

// AUTO PASSWORD

function autoPassword(){

document.getElementById("password").value="1234";

}

// LOGIN CHECK

document.getElementById("loginBtn").onclick=function(){

let gmail=document.getElementById("gmail").value.trim();

let password=document.getElementById("password").value.trim();

if(gmail==="Falconpanel@gmail.com" && password==="1234"){

showPage(service);

}else{

document.querySelector(".login-box").classList.add("shake");

setTimeout(()=>{

document.querySelector(".login-box").classList.remove("shake");

},400);

alert("Invalid Business Gmail or Password");

}

};

// SERVICE → LOGIN

document.getElementById("backLogin").onclick=function(){

showPage(login);

};
//====================================
// FALCON PANEL
// SCRIPT PART 1
//====================================

const home=document.getElementById("home");
const login=document.getElementById("login");
const service=document.getElementById("service");
const finalPage=document.getElementById("final");

function showPage(page){

home.classList.remove("active");
login.classList.remove("active");
service.classList.remove("active");
finalPage.classList.remove("active");

page.classList.add("active");

window.scrollTo(0,0);

}

// HOME → LOGIN

document.getElementById("startBtn").onclick=function(){

this.style.transform="scale(.90)";

setTimeout(()=>{

showPage(login);

this.style.transform="scale(1)";

},300);

};

// LOGIN → HOME

document.getElementById("backHome").onclick=function(){

showPage(home);

};

// AUTO PASSWORD

function autoPassword(){

document.getElementById("password").value="1234";

}

// LOGIN CHECK

document.getElementById("loginBtn").onclick=function(){

let gmail=document.getElementById("gmail").value.trim();

let password=document.getElementById("password").value.trim();

if(gmail==="Falconpanel@gmail.com" && password==="1234"){

showPage(service);

}else{

document.querySelector(".login-box").classList.add("shake");

setTimeout(()=>{

document.querySelector(".login-box").classList.remove("shake");

},400);

alert("Invalid Business Gmail or Password");

}

};

// SERVICE → LOGIN

document.getElementById("backLogin").onclick=function(){

showPage(login);

};
