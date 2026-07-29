// =========================
// ELEMENTS
// =========================

const welcomePage = document.getElementById("welcomePage");
const loginPage = document.getElementById("loginPage");
const selectPage = document.getElementById("selectPage");
const successPage = document.getElementById("successPage");

const gmail = document.getElementById("gmail");
const password = document.getElementById("password");

const platform = document.getElementById("platform");
const country = document.getElementById("country");

const loginError = document.getElementById("loginError");
const selectError = document.getElementById("selectError");

const bgMusic = document.getElementById("bgMusic");
const successMusic = document.getElementById("successMusic");
const musicBtn = document.getElementById("musicBtn");

// =========================
// LOGIN DATA
// =========================

const BUSINESS_GMAIL = "falconpanel@gmail.com";
const PASSWORD = "1234";

// =========================
// PAGE FUNCTIONS
// =========================

function hideAllPages(){

    document.querySelectorAll(".page").forEach(page=>{

        page.classList.remove("active");

    });

}

function showWelcome(){

    hideAllPages();

    welcomePage.classList.add("active");

}

function showLogin(){

    hideAllPages();

    loginPage.classList.add("active");

}

function showSelect(){

    hideAllPages();

    selectPage.classList.add("active");

}

function showSuccess(){

    hideAllPages();

    successPage.classList.add("active");

}

// =========================
// MUSIC BUTTON
// OFF → CLICK = PLAY
// =========================

function toggleMusic(){

    if(bgMusic.paused){

        bgMusic.play();

    }else{

        bgMusic.pause();

        bgMusic.currentTime = 0;

    }

}
// =========================
// LOGIN SYSTEM
// =========================

function loginUser(){

    loginError.textContent = "";

    const userGmail = gmail.value.trim().toLowerCase();
    const userPassword = password.value.trim();

    if(userGmail === ""){

        loginError.textContent = "Please enter your Business Gmail.";

        return;

    }

    if(userGmail !== BUSINESS_GMAIL.toLowerCase()){

        loginError.textContent = "Invalid Business Gmail.";

        return;

    }

    if(userPassword !== PASSWORD){

        loginError.textContent = "Invalid Password.";

        return;

    }

    showSelect();

}

// =========================
// ENTER KEY LOGIN
// =========================

gmail.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        loginUser();

    }

});

password.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        loginUser();

    }

});
// =========================
// GET NUMBER
// =========================

function getNumber(){

    selectError.textContent = "";

    if(platform.value===""){

        selectError.textContent = "Please select a platform.";

        return;

    }

    if(country.value===""){

        selectError.textContent = "Please select a country.";

        return;

    }

    // Stop background music
    if(bgMusic){

        bgMusic.pause();
        bgMusic.currentTime = 0;

    }

    // Show Success Page
    showSuccess();

    // Play sad music automatically
    if(successMusic){

        successMusic.currentTime = 0;

        successMusic.play().catch(function(error){

            console.log(error);

        });

    }

}

// =========================
// STOP SUCCESS MUSIC
// =========================

window.addEventListener("beforeunload",function(){

    if(successMusic){

        successMusic.pause();

        successMusic.currentTime = 0;

    }

});
// =========================
// CLEAR ERRORS
// =========================

gmail.addEventListener("input", () => {

    loginError.textContent = "";

});

platform.addEventListener("change", () => {

    selectError.textContent = "";

});

country.addEventListener("change", () => {

    selectError.textContent = "";

});

// =========================
// PAGE LOAD
// =========================

window.onload = function(){

    showWelcome();

};

// =========================
// STOP ALL MUSIC WHEN LEAVING
// =========================

window.addEventListener("beforeunload", function(){

    if(bgMusic){

        bgMusic.pause();
        bgMusic.currentTime = 0;

    }

    if(successMusic){

        successMusic.pause();
        successMusic.currentTime = 0;

    }

});

// =========================
// SCRIPT READY
// =========================

console.log("FalconPanel Loaded Successfully");
