// =========================
// ELEMENTS
// =========================

const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const platformPage = document.getElementById("platformPage");
const successPage = document.getElementById("successPage");

const getStarted = document.getElementById("getStarted");
const loginBtn = document.getElementById("loginBtn");
const backWelcome = document.getElementById("backWelcome");
const backLogin = document.getElementById("backLogin");
const backHome = document.getElementById("backHome");

const gmail = document.getElementById("gmail");
const password = document.getElementById("password");

const loginError = document.getElementById("loginError");

const platform = document.getElementById("platform");
const country = document.getElementById("country");
const getNumber = document.getElementById("getNumber");
const formError = document.getElementById("formError");

const music = document.getElementById("successMusic");

// =========================
// ACCOUNT
// =========================

const BUSINESS_GMAIL = "falconpanel@gmail.com";
const PASSWORD = "1234";

// =========================
// PAGE FUNCTION
// =========================

function showPage(page){

    document.querySelectorAll(".page").forEach(function(item){

        item.classList.remove("active");

    });

    page.classList.add("active");

}

// =========================
// WELCOME PAGE
// =========================

getStarted.addEventListener("click",function(){

    showPage(loginPage);

});

// =========================
// BACK BUTTONS
// =========================

backWelcome.addEventListener("click",function(){

    showPage(welcomePage);

});

backLogin.addEventListener("click",function(){

    showPage(loginPage);

});
// =========================
// LOGIN SYSTEM
// =========================

loginBtn.addEventListener("click", function () {

    loginError.textContent = "";

    const userGmail = gmail.value.trim().toLowerCase();
    const userPassword = password.value.trim();

    if (userGmail === "") {

        loginError.textContent = "Please enter your Business Gmail.";

        gmail.classList.add("shake");

        setTimeout(() => {
            gmail.classList.remove("shake");
        }, 400);

        return;

    }

    if (userGmail !== BUSINESS_GMAIL) {

        loginError.textContent = "Invalid Business Gmail.";

        gmail.classList.add("shake");

        setTimeout(() => {
            gmail.classList.remove("shake");
        }, 400);

        return;

    }

    if (userPassword !== PASSWORD) {

        loginError.textContent = "Invalid Password.";

        password.classList.add("shake");

        setTimeout(() => {
            password.classList.remove("shake");
        }, 400);

        return;

    }

    loginError.textContent = "";

    showPage(platformPage);

});
// =========================
// GET NUMBER
// =========================

getNumber.addEventListener("click", function () {

    formError.textContent = "";

    if (platform.value === "") {

        formError.textContent = "Please select your platform.";

        platform.classList.add("shake");

        setTimeout(() => {
            platform.classList.remove("shake");
        }, 400);

        return;

    }

    if (country.value === "") {

        formError.textContent = "Please select your country.";

        country.classList.add("shake");

        setTimeout(() => {
            country.classList.remove("shake");
        }, 400);

        return;

    }

    if (music) {

        music.currentTime = 0;

        music.play().catch(() => {});

    }

    alert("Number Send Successful");

    showPage(successPage);

});

// Clear errors when changing selections

platform.addEventListener("change", function () {

    formError.textContent = "";

});

country.addEventListener("change", function () {

    formError.textContent = "";

});
// =========================
// BACK TO HOME
// =========================

backHome.addEventListener("click", function () {

    if (music) {
        music.pause();
        music.currentTime = 0;
    }

    gmail.value = "";
    password.value = "1234";

    platform.selectedIndex = 0;
    country.selectedIndex = 0;

    loginError.textContent = "";
    formError.textContent = "";

    showPage(welcomePage);

});

// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", function () {

    showPage(welcomePage);

});

// =========================
// STOP MUSIC ON EXIT
// =========================

window.addEventListener("beforeunload", function () {

    if (music) {
        music.pause();
        music.currentTime = 0;
    }

});

console.log("FalconPanel Loaded Successfully");
