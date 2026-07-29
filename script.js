/* ========================================= */
/* FALCONPANEL SCRIPT.JS */
/* PART 1/4 */
/* ========================================= */


/* ========================= */
/* PAGE CONTROL */
/* ========================= */


function showPage(pageId){

    let pages = document.querySelectorAll(".page");

    pages.forEach(page=>{

        page.classList.remove("active");

    });


    let target = document.getElementById(pageId);


    if(target){

        target.classList.add("active");

    }


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}



/* ========================= */
/* WELCOME PAGE */
/* ========================= */


function startPanel(){


    showPage("loginPage");


}



/* ========================= */
/* BACK BUTTON */
/* ========================= */


function goBack(page){


    showPage(page);


}



/* ========================= */
/* LOGIN SYSTEM */
/* ========================= */


const validEmail = "falconpanel@gmail.com";


const validPassword = "1234";



function login(){



    let emailInput = document.getElementById("email");


    let passwordInput = document.getElementById("password");



    let emailError = document.getElementById("emailError");


    let passwordError = document.getElementById("passwordError");



    let email = emailInput.value.trim();



    let password = passwordInput.value.trim();




    // Reset Error


    emailError.innerHTML = "";


    passwordError.innerHTML = "";




    let success = true;




    /* Gmail Check */


    if(email !== validEmail){


        emailError.innerHTML =
        "Invalid Business Gmail";


        success = false;


    }




    /* Password Check */


    if(password !== validPassword){


        passwordError.innerHTML =
        "Invalid Password";


        success = false;


    }





    if(success){


        showPage("servicePage");


    }



}
/* ========================================= */
/* SERVICE SELECT SYSTEM */
/* PART 2/4 */
/* ========================================= */



/* ========================= */
/* GET NUMBER BUTTON */
/* ========================= */


function getNumber(){



    let platform =
    document.getElementById("platform");



    let country =
    document.getElementById("country");



    let platformError =
    document.getElementById("platformError");



    let countryError =
    document.getElementById("countryError");




    let selectedPlatform =
    platform.value;



    let selectedCountry =
    country.value;




    // Clear Error


    platformError.innerHTML = "";


    countryError.innerHTML = "";



    let valid = true;





    /* Platform Validation */


    if(selectedPlatform === ""){


        platformError.innerHTML =
        "Please select a platform";


        valid = false;


    }





    /* Country Validation */


    if(selectedCountry === ""){


        countryError.innerHTML =
        "Please select a country";


        valid = false;


    }





    if(valid){


        openFinalPage();


    }




}






/* ========================= */
/* FINAL PAGE OPEN */
/* ========================= */



function openFinalPage(){


    showPage("finalPage");



    playSadMusic();



}






/* ========================= */
/* MUSIC SYSTEM */
/* ========================= */



let music;



let musicPlaying = false;





function playSadMusic(){



    music =
    document.getElementById("sadMusic");



    if(music){



        music.volume = 0.5;



        music.play()
        .then(()=>{


            musicPlaying = true;



        })

        .catch(()=>{


            console.log(
            "Music waiting for user interaction"
            );


        });



    }



}






/* ========================= */
/* MUSIC BUTTON */
/* ========================= */


function toggleMusic(){



    if(!music){


        music =
        document.getElementById("sadMusic");


    }




    if(musicPlaying){



        music.pause();



        musicPlaying = false;



    }


    else{



        music.play();



        musicPlaying = true;



    }



        }
/* ========================================= */
/* EXTRA CONTROLS & EVENTS */
/* PART 3/4 */
/* ========================================= */



/* ========================= */
/* KEEP MUSIC BUTTON TEXT */
/* ========================= */


function updateMusicButton(){



    let btn =
    document.getElementById("musicBtn");



    if(btn){



        btn.innerHTML =
        "🔇 Music OFF";



    }



}






/* ========================= */
/* PAGE LOAD SETUP */
/* ========================= */


window.addEventListener(
"load",
function(){



    updateMusicButton();



    let password =
    document.getElementById("password");



    if(password){



        password.value =
        "1234";



        password.readOnly =
        true;



    }



});






/* ========================= */
/* ENTER KEY LOGIN */
/* ========================= */



document.addEventListener(
"keydown",
function(event){



    let loginPage =
    document.getElementById("loginPage");



    if(
    event.key === "Enter" &&
    loginPage &&
    loginPage.classList.contains("active")
    ){



        login();



    }



});







/* ========================= */
/* INPUT ERROR REMOVE */
/* ========================= */



function clearError(id){



    let error =
    document.getElementById(id);



    if(error){


        error.innerHTML = "";


    }



}






/* ========================= */
/* INPUT LISTENER */
/* ========================= */



window.addEventListener(
"DOMContentLoaded",
function(){



    let inputs =
    document.querySelectorAll(
    "input,select"
    );



    inputs.forEach(
    function(input){



        input.addEventListener(
        "input",
        function(){



            if(this.id === "email"){


                clearError(
                "emailError"
                );


            }



            if(this.id === "platform"){


                clearError(
                "platformError"
                );


            }



            if(this.id === "country"){


                clearError(
                "countryError"
                );


            }



        });



    });



});







/* ========================= */
/* BUTTON RIPPLE EFFECT */
/* ========================= */



document.addEventListener(
"click",
function(e){



    let button =
    e.target.closest("button");



    if(!button) return;



    let ripple =
    document.createElement("span");



    ripple.className =
    "ripple";



    button.appendChild(ripple);




    setTimeout(
    function(){


        ripple.remove();



    },
    500
    );



});
/* ========================================= */
/* FINAL SETTINGS & SECURITY */
/* PART 4/4 */
/* ========================================= */



/* ========================= */
/* MUSIC SETTINGS */
/* ========================= */


function setupMusic(){



    music =
    document.getElementById("sadMusic");



    if(music){



        music.loop = true;


        music.volume = 0.5;



    }



}







/* ========================= */
/* FINAL PAGE MUSIC START */
/* ========================= */



function finalMusicStart(){



    if(!music){



        setupMusic();



    }




    if(music){



        music.play()
        .then(function(){



            musicPlaying = true;



        })

        .catch(function(){



            console.log(
            "Browser blocked autoplay"
            );


        });



    }



}






/* ========================= */
/* CHECK FINAL PAGE */
/* ========================= */



function checkFinalPage(){



    let finalPage =
    document.getElementById("finalPage");



    if(
    finalPage &&
    finalPage.classList.contains("active")
    ){



        finalMusicStart();



    }



}







/* ========================= */
/* OVERRIDE PAGE SWITCH */
/* ========================= */


let oldShowPage = showPage;



showPage = function(pageId){



    oldShowPage(pageId);




    if(pageId === "finalPage"){



        setTimeout(
        function(){


            finalMusicStart();



        },
        300
        );



    }



};







/* ========================= */
/* INITIALIZE APP */
/* ========================= */


document.addEventListener(
"DOMContentLoaded",
function(){



    setupMusic();



    updateMusicButton();



});







/* ========================= */
/* PREVENT PASSWORD CHANGE */
/* ========================= */



document.addEventListener(
"DOMContentLoaded",
function(){



    let pass =
    document.getElementById("password");



    if(pass){



        pass.addEventListener(
        "keydown",
        function(e){



            e.preventDefault();



        });



    }



});







/* ========================= */
/* EXPORT FUNCTIONS */
/* ========================= */


window.startPanel =
startPanel;


window.login =
login;


window.getNumber =
getNumber;


window.goBack =
goBack;


window.toggleMusic =
toggleMusic;


/* ========================================= */
/* END OF FALCONPANEL SCRIPT.JS */
/* ========================================= */
