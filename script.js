const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('input[name="volume"]');
const playbackSpeed = document.querySelector('input[name="playbackSpeed"]');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Play and Pause functionality
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Volume control
volume.addEventListener('input', (e) => {
    video.volume = e.target.value;
});

// Playback speed control
playbackSpeed.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
});

// Rewind 10 seconds
rewind.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Forward 25 seconds
forward.addEventListener('click', () => {
    video.currentTime += 25;
});

// Progress bar update
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
}

video.addEventListener('timeupdate', handleProgress);

// Scrubbing
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

progress.addEventListener('click', scrub);
