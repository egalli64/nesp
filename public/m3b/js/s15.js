// Assuming DOM has been loaded

let video = document.querySelector('video');
let btnPlay = document.getElementById('play');
let btnStop = document.getElementById('stop');
let timer = document.getElementById('timer');

video.addEventListener('timeupdate', () => {
    let minutes = Math.round(video.currentTime / 60);
    let seconds = Math.round(video.currentTime - minutes * 60);

    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    timer.textContent = minutes + ':' + seconds;
});

btnPlay.addEventListener('click', () => {
    if (video.paused) {
        btnPlay.textContent = 'Pause';
        video.play();
    } else {
        btnPlay.textContent = 'Play';
        video.pause();
    }
});

function stop() {
    video.pause();
    video.currentTime = 0;
    btnPlay.textContent = 'Play';
}

btnStop.addEventListener('click', stop);
video.addEventListener('ended', stop);