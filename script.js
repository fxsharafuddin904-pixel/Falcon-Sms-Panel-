const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const platformPage = document.getElementById("platformPage");
const successPage = document.getElementById("successPage");

const getStarted = document.getElementById("getStarted");
const backWelcome = document.getElementById("backWelcome");
const backLogin = document.getElementById("backLogin");
const backHome = document.getElementById("backHome");

const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");

const platform = document.getElementById("platform");
const country = document.getElementById("country");
const getNumber = document.getElementById("getNumber");
const formError = document.getElementById("formError");

const music = document.getElementById("successMusic");

function showPage(page){

    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    page.classList.add("active");
}

getStarted.onclick=function(){

    showPage(loginPage);

};

backWelcome.onclick=function(){

    showPage(welcomePage);

};

backLogin.onclick=function(){

    showPage(loginPage);

};

backHome.onclick=function(){

    if(music){
        music.pause();
        music.currentTime=0;
    }

    platform.selectedIndex=0;
    country.selectedIndex=0;

    formError.textContent="";
    passwordInput.value="";

    showPage(welcomePage);

};
const BUSINESS_GMAIL = "falconpanel@gmail.com";
const PASSWORD = "1234";

passwordInput.addEventListener("click", function () {

    if (this.value === "") {
        this.value = PASSWORD;
    }

});

loginBtn.addEventListener("click", function () {

    const gmail = document
        .getElementById("gmail")
        .value
        .trim()
        .toLowerCase();

    const pass = passwordInput.value.trim();

    loginError.textContent = "";

    if (gmail !== BUSINESS_GMAIL.toLowerCase()) {

        loginError.textContent =
            "❌ Invalid Business Gmail.";

        document
            .getElementById("gmail")
            .classList.add("shake");

        setTimeout(() => {
            document
                .getElementById("gmail")
                .classList.remove("shake");
        }, 400);

        return;

    }

    if (pass !== PASSWORD) {

        loginError.textContent =
            "❌ Wrong Password.";

        passwordInput.classList.add("shake");

        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 400);

        return;

    }

    document
        .getElementById("gmail")
        .value = "";

    passwordInput.value = "";

    loginError.textContent = "";

    showPage(platformPage);

});
getNumber.addEventListener("click", function () {

    formError.textContent = "";

    if (platform.value === "") {

        formError.textContent = "❌ Please select your platform.";

        platform.classList.add("shake");

        setTimeout(() => {
            platform.classList.remove("shake");
        }, 400);

        return;

    }

    if (country.value === "") {

        formError.textContent = "❌ Please select your country.";

        country.classList.add("shake");

        setTimeout(() => {
            country.classList.remove("shake");
        }, 400);

        return;

    }

    if (music) {
        music.currentTime = 0;
        music.play();
    }

    alert("Number Send Successful");

    showPage(successPage);

});
/* =========================
SUCCESS PAGE
========================= */

window.addEventListener("load", () => {

    showPage(welcomePage);

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (music) {
            music.pause();
            music.currentTime = 0;
        }

    }

});

window.addEventListener("beforeunload", () => {

    if (music) {
        music.pause();
        music.currentTime = 0;
    }

});

platform.addEventListener("change", () => {
    formError.textContent = "";
});

country.addEventListener("change", () => {
    formError.textContent = "";
});

/* =========================
END
========================= */

console.log("FalconPanel Loaded Successfully");
