// Cache DOM elements for better performance
const switcher = document.getElementById('switcher');
const container = document.getElementById('container');
const bg = document.getElementById('bg');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const popupCloser = document.getElementById('popupCloser');
const soundImage = document.getElementById('soundImage');
const myAudio = document.getElementById('myAudio');
const loader = document.getElementById("loader");

let isPlaying = false;

// Function to handle page switching
function handlePageSwitch(e) {
    Array.from(switcher.children).forEach(button => button.classList.remove('active'));
    e.currentTarget.classList.add('active');
    bg.src = `img/bg/${e.currentTarget.innerText}.png`;
    container.dataset.scene = e.currentTarget.innerText;
}

// Function to handle sprite click
function handleSpriteClick(e) {
    popupImg.src = `img/pop${e.currentTarget.dataset.popupId}.png`;
    popup.classList.add('open');
}

// Function to close the popup
function closePopup() {
    popup.classList.remove('open');
}
// Function to toggle audio playback
function toggleAudio() {
    if (isPlaying) {
        myAudio.pause();
        soundImage.src = 'img/mute.png';
    } else {
        myAudio.play();
        soundImage.src = 'img/play.png';
    }
    isPlaying = !isPlaying;

    // Trigger the boing animation
    soundImage.classList.add('boing');
    
    // Remove the animation class after it completes
    setTimeout(() => {
        soundImage.classList.remove('boing');
    }, 300); // Match this duration with the animation duration
}
// Prevent context menu on images
function preventContextMenu(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
}

// Hide loader on window load
function hideLoader() {
    loader.style.display = "none";
}

// Event listeners
Array.from(switcher.children).forEach(pageButton => {
    pageButton.addEventListener('click', handlePageSwitch);
});

document.querySelectorAll('.sprite').forEach(sprite => {
    sprite.addEventListener('click', handleSpriteClick);
});

popupCloser.addEventListener('click', closePopup);
soundImage.addEventListener('click', toggleAudio);
document.addEventListener('contextmenu', preventContextMenu);
window.addEventListener('load', hideLoader);