// ==========================
// FALCON PANEL
// PART 1
// ==========================

const home = document.getElementById("home");
const login = document.getElementById("login");
const service = document.getElementById("service");
const finalPage = document.getElementById("final");

function showPage(page){

home.classList.remove("active");
login.classList.remove("active");
service.classList.remove("active");
finalPage.classList.remove("active");

page.classList.add("active");

}

// Home → Login

document.getElementById("startBtn").onclick = function(){

this.style.transform="scale(.92)";

setTimeout(()=>{

showPage(login);

},300);

};

// Back Login → Home

document.getElementById("backHome").onclick=function(){

showPage(home);

};

// Password Auto Fill

function autoPassword(){

document.getElementById("password").value="1234";

}

// Login

document.getElementById("loginBtn").onclick=function(){

let gmail=document.getElementById("gmail").value.trim();

let pass=document.getElementById("password").value.trim();

if(
gmail==="Falconpanel@gmail.com"
&&
pass==="1234"
){

showPage(service);

}else{

document.querySelector(".login-box").classList.add("shake");

setTimeout(()=>{

document.querySelector(".login-box").classList.remove("shake");

},400);

alert("Wrong Business Gmail or Password.");

}

};

// Back Service → Login

document.getElementById("backLogin").onclick=function(){

showPage(login);

};
// ==========================
// FALCON PANEL
// PART 2 (FINAL)
// ==========================

const platform = document.getElementById("platform");
const country = document.getElementById("country");
const music = document.getElementById("sadMusic");

// Get Number
document.getElementById("getNumber").onclick = function () {

    if (platform.value === "" || country.value === "") {

        document.querySelector(".service-box").classList.add("shake");

        setTimeout(() => {
            document.querySelector(".service-box").classList.remove("shake");
        }, 400);

        alert("Please select Platform and Country.");

        return;
    }

    showPage(finalPage);

    // Try to play music
    music.currentTime = 0;
    music.play().catch(() => {});
};

// Back Final → Service
document.getElementById("backService").onclick = function () {
    music.pause();
    music.currentTime = 0;
    showPage(service);
};

// Music OFF Button
const musicBtn = document.getElementById("musicToggle");

musicBtn.onclick = function () {

    if (music.paused) {

        music.play().catch(() => {});
        musicBtn.innerHTML = "🔊 ON";

    } else {

        music.pause();
        musicBtn.innerHTML = "🔇 OFF";

    }

};

// Press Enter to Login
document.addEventListener("keydown", function (e) {

    if (e.key === "Enter" && login.classList.contains("active")) {

        document.getElementById("loginBtn").click();

    }

});

// Default Home Page
showPage(home);
