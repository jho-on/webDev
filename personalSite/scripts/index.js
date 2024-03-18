
const MODESELECTORBTN = document.getElementById("modeSelectorBtn");
const MODESELECTORIMG = document.getElementById("modeSelectorImg");
const LOGO = document.getElementById('logo');


let darkMode;

if (localStorage.getItem("darkMode") == null){
    darkMode = true;
    localStorage.setItem("darkMode", "true");
}else{
    darkMode = !Boolean(localStorage.getItem("darkMode"));
}




let darkLogoPath = "images/logoDarkMode.gif";
let whiteLogoPath = "images/logoWhiteMode.gif";
let darkModeSelectorImg = "images/sun.png";
let whiteModeSelectorImg = "images/moon.png";



function changeMode(){
    console.log(darkMode)
    if (darkMode){
        darkMode = false;
        localStorage.setItem("darkMode", "");
    }else{
        darkMode = true;
        localStorage.setItem("darkMode", "true")
    }
    

    if (darkMode === false){
        //white mode
        document.documentElement.style.setProperty('--BGColor', "#ffffff");
        document.documentElement.style.setProperty('--BGDarkColor', "#c0cbdc");
        document.documentElement.style.setProperty('--BGDarkerColor', "#8b9bb4");
    
        document.documentElement.style.setProperty('--textColor', "#181425");

        LOGO.src = whiteLogoPath;
        MODESELECTORIMG.src = whiteModeSelectorImg;
    }else{
        //dark mode
        document.documentElement.style.setProperty('--BGColor', "#181425");
        document.documentElement.style.setProperty('--BGDarkColor', "#0c0812");
        document.documentElement.style.setProperty('--BGDarkerColor', "#060208");

        document.documentElement.style.setProperty('--textColor', "#ffffff");

        LOGO.src = darkLogoPath;
        MODESELECTORIMG.src = darkModeSelectorImg;
    }
}

window.onload = changeMode;
MODESELECTORBTN.onclick = changeMode;

