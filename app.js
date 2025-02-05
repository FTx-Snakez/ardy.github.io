const button = document.querySelector('.button');
const stopBtn = document.querySelector('.button-stop');
const vinyl = document.querySelector('.vinyl');
const audio = document.querySelector('.audio');

button.addEventListener('click', function() {
    vinyl.classList.add('spin'); // Start spinning
    audio.play();

    // Toggle buttons
    button.style.visibility = 'hidden';
    stopBtn.style.visibility = 'visible';
});

stopBtn.addEventListener('click', function () {
    vinyl.classList.remove('spin'); // Stop spinning
    audio.pause();
    audio.currentTime = 0; // Reset audio

    // Toggle buttons
    stopBtn.style.visibility = 'hidden';
    button.style.visibility = 'visible';
});
