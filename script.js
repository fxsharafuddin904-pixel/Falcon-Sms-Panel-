// ===== Pages =====
const pages = document.querySelectorAll(".page");

function showPage(id) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ===== Welcome =====
const getStarted = document.getElementById("getStarted");

if(getStarted){
    getStarted.onclick = () => {
        showPage("loginPage");
    };
}

// ===== Login =====
const LOGIN_EMAIL = "FalconPanel@gmail.com";
const LOGIN_PASSWORD = "1234";

const loginBtn = document.getElementById("loginBtn");

if(loginBtn){

    loginBtn.onclick = function(){

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const error = document.getElementById("loginError");

        if(email !== LOGIN_EMAIL){
            error.innerHTML = "Invalid Gmail";
            document.querySelector(".app-card").classList.add("shake");
            setTimeout(()=>{
                document.querySelector(".app-card").classList.remove("shake");
            },400);
            return;
        }

        if(password !== LOGIN_PASSWORD){
            error.innerHTML = "Invalid Password";
            document.querySelector(".app-card").classList.add("shake");
            setTimeout(()=>{
                document.querySelector(".app-card").classList.remove("shake");
            },400);
            return;
        }

        error.innerHTML="";
        showPage("mainPage");

    }

}

// ===== Auto Password =====
const passwordInput = document.getElementById("password");

if(passwordInput){

    let done=false;

    passwordInput.addEventListener("click",function(){

        if(done) return;

        this.value="1234";
        done=true;

    });

}

// ===== Demo Action =====
const demoBtn = document.getElementById("getNumberBtn");

if(demoBtn){

    demoBtn.onclick=function(){

        const platform=document.getElementById("platform").value;
        const country=document.getElementById("country").value;

        const error=document.getElementById("mainError");

        if(platform==="" || country===""){

            error.innerHTML="Please select Platform and Country.";

            document.querySelector(".app-card").classList.add("shake");

            setTimeout(()=>{
                document.querySelector(".app-card").classList.remove("shake");
            },400);

            return;

        }

        error.innerHTML="";

        const audio=document.getElementById("audio");

        if(audio){
            audio.currentTime=0;
            audio.play();
        }

        alert("Demo Mode - Feature unavailable.");

    };

}
