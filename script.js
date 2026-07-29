// =========================
// Elements
// =========================

const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const servicePage = document.getElementById("servicePage");
const finalPage = document.getElementById("finalPage");

const startBtn = document.getElementById("startBtn");
const loginBtn = document.getElementById("loginBtn");
const backWelcomeBtn = document.getElementById("backWelcomeBtn");
const getNumberBtn = document.getElementById("getNumberBtn");
const backLoginBtn = document.getElementById("backLoginBtn");

const gmail = document.getElementById("gmail");
const password = document.getElementById("password");

const gmailError = document.getElementById("gmailError");
const passwordError = document.getElementById("passwordError");

const platform = document.getElementById("platform");
const country = document.getElementById("country");

const platformError = document.getElementById("platformError");
const countryError = document.getElementById("countryError");

const sadMusic = document.getElementById("sadMusic");
const musicToggleBtn = document.getElementById("musicToggleBtn");

// =========================
// Show Page
// =========================

function showPage(page){

    document.querySelectorAll(".page").forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

}

// =========================
// Welcome
// =========================

startBtn.addEventListener("click",()=>{

    showPage(loginPage);

});

// =========================
// Back Buttons
// =========================

backWelcomeBtn.addEventListener("click",()=>{

    showPage(welcomePage);

});

backLoginBtn.addEventListener("click",()=>{

    showPage(loginPage);

});

// =========================
// Clear Errors
// =========================

function clearErrors(){

    gmailError.textContent="";

    passwordError.textContent="";

    platformError.textContent="";

    countryError.textContent="";

    document
    .querySelectorAll("input,select")
    .forEach(item=>{

        item.classList.remove("shake");

    });

}
// =========================
// Login Validation
// =========================

loginBtn.addEventListener("click", () => {

    clearErrors();

    let valid = true;

    if (gmail.value.trim() !== "falconpanel@gmail.com") {

        gmailError.textContent = "Invalid Business Gmail";

        gmail.classList.add("shake");

        valid = false;
    }

    if (password.value !== "1234") {

        passwordError.textContent = "Invalid Password";

        password.classList.add("shake");

        valid = false;
    }

    if (valid) {

        showPage(servicePage);

    }

});

// =========================
// Service Validation
// =========================

getNumberBtn.addEventListener("click", () => {

    clearErrors();

    let valid = true;

    if (platform.value === "") {

        platformError.textContent = "Please select a platform";

        platform.classList.add("shake");

        valid = false;
    }

    if (country.value === "") {

        countryError.textContent = "Please select a country";

        country.classList.add("shake");

        valid = false;
    }

    if (valid) {

        showPage(finalPage);

        sadMusic.volume = 0.7;

        sadMusic.play().catch(() => {});

    }

});

// =========================
// Music Toggle
// =========================

let musicPlaying = true;

musicToggleBtn.addEventListener("click", () => {

    if (musicPlaying) {

        sadMusic.pause();

    } else {

        sadMusic.play().catch(() => {});

    }

    musicPlaying = !musicPlaying;

});

// =========================
// Enter Key Support
// =========================

gmail.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        loginBtn.click();

    }

});

platform.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        getNumberBtn.click();

    }

});

country.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        getNumberBtn.click();

    }

});

// =========================
// Initial Page
// =========================

showPage(welcomePage);
