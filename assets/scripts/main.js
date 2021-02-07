// main.js

// TODO

var volNum = document.getElementById("volume-number");
var volSlide = document.getElementById("volume-slider");
var volImg = document.getElementById("volume-image");
var volAudio = document.getElementById("horn-sound");
var soundImg = document.getElementById("sound-image");
var honkBtn = document.getElementById("honk-btn");

var allHorns = document.getElementById("audio-selection");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");

volNum.addEventListener("input", function() {
    let level = volNum.getAttribute("value");
    volSlide.setAttribute("value", level);
    let levelNum = parseFloat(level);
    if (levelNum == 0) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        volImg.setAttribute("alt", "No Volume");
    } else if (levelNum <= 33) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        volImg.setAttribute("alt", "Min Volume");
    } else if (levelNum <= 66) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        volImg.setAttribute("alt", "Mid Volume");
    } else {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        volImg.setAttribute("alt", "Max Volume");
    }
    honkBtn.setAttribute("disabled", levelNum == 0);
    volAudio.setAttribute("volume", levelNum / 100.0);    
});

volSlide.addEventListener("input", function() {
    let level = volSlide.getAttribute("value");
    volNum.setAttribute("value", level);
    let levelNum = parseFloat(level);
    if (levelNum == 0) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        volImg.setAttribute("alt", "No Volume");
    } else if (levelNum <= 33) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        volImg.setAttribute("alt", "Min Volume");
    } else if (levelNum <= 66) {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        volImg.setAttribute("alt", "Mid Volume");
    } else {
        volImg.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        volImg.setAttribute("alt", "Max Volume");
    }
    honkBtn.setAttribute("disabled", levelNum == 0);
    volAudio.setAttribute("volume", levelNum / 100.0);
});

airHorn.addEventListener("change", function() {
    soundImg.setAttribute("src", "./assets/media/images/air-horn.svg");
    soundImg.setAttribute("alt", "Air Horn");
    volAudio.setAttribute("src", "./assets/media/audio/air-horn.mp3");
});

carHorn.addEventListener("change", function() {
    soundImg.setAttribute("src", "./assets/media/images/car.svg");
    soundImg.setAttribute("alt", "Car Horn");
    volAudio.setAttribute("src", "./assets/media/audio/car-horn.mp3");
});

partyHorn.addEventListener("change", function() {
    soundImg.setAttribute("src", "./assets/media/images/party-horn.svg");
    soundImg.setAttribute("alt", "Party Horn");
    volAudio.setAttribute("src", "./assets/media/audio/party-horn.mp3");
});

honkBtn.addEventListener("click", function() {
    volAudio.play();
});




