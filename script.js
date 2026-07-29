// =========================
// ELEMENTS
// =========================

const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const platformPage = document.getElementById("platformPage");
const successPage = document.getElementById("successPage");

const getStarted = document.getElementById("getStarted");
const loginBtn = document.getElementById("loginBtn");
const getNumber = document.getElementById("getNumber");

const backWelcome = document.getElementById("backWelcome");
const backLogin = document.getElementById("backLogin");

const gmail = document.getElementById("gmail");
const password = document.getElementById("password");

const platform = document.getElementById("platform");
const country = document.getElementById("country");

const loginError = document.getElementById("loginError");
const formError = document.getElementById("formError");

const music = document.getElementById("successMusic");

// =========================
// LOGIN ACCOUNT
// =========================

const BUSINESS_GMAIL = "falconpanel@gmail.com";
const PASSWORD = "1234";

// =========================
// PAGE FUNCTION
// =========================

function showPage(page){

    document.querySelectorAll(".page").forEach(item=>{

        item.classList.remove("active");

    });

    page.classList.add("active");

}

// =========================
// GET STARTED
// =========================

getStarted.addEventListener("click",()=>{

    showPage(loginPage);

});

// =========================
// BACK BUTTONS
// =========================

backWelcome.addEventListener("click",()=>{

    showPage(welcomePage);

});

backLogin.addEventListener("click",()=>{

    showPage(loginPage);

});
// =========================
// LOGIN SYSTEM
// =========================

loginBtn.addEventListener("click", () => {

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

getNumber.addEventListener("click", () => {

    formError.textContent = "";

    if (platform.value === "") {

        formError.textContent = "Please select a platform.";

        platform.classList.add("shake");

        setTimeout(() => {
            platform.classList.remove("shake");
        }, 400);

        return;

    }

    if (country.value === "") {

        formError.textContent = "Please select a country.";

        country.classList.add("shake");

        setTimeout(() => {
            country.classList.remove("shake");
        }, 400);

        return;

    }

    // Play Music

    if (music) {

        music.currentTime = 0;

        music.play().catch(err => {
            console.log("Music Error:", err);
        });

    }

    // No Popup
    // Direct Success Page

    showPage(successPage);

});

// =========================
// CLEAR ERROR
// =========================

platform.addEventListener("change", () => {

    formError.textContent = "";

});

country.addEventListener("change", () => {

    formError.textContent = "";

});
// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {

    showPage(welcomePage);

});

// =========================
// STOP MUSIC WHEN PAGE CLOSES
// =========================

window.addEventListener("beforeunload", () => {

    if (music) {

        music.pause();
        music.currentTime = 0;

    }

});

// =========================
// OPTIONAL
// Press Enter to Login
// =========================

gmail.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        loginBtn.click();

    }

});

password.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        loginBtn.click();

    }

});

// =========================
// SCRIPT READY
// =========================

console.log("FalconPanel Loaded Successfully");
