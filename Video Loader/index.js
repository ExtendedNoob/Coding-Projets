const video = document.getElementById('video');
const play = document.getElementById('play');
const stope = document.getElementById('stop');
const progres = document.getElementById('progres');
const etampetemps = document.getElementById('etampe-temps');

function statusVideo() {
	if (video.paused) {
		video.play();
	}
	else {
		video.pause();
	}
}

function stopVideo() {
	video.currentTime = 0;
	video.pause();
}

function updatePlayIcon() {
	if(video.paused) {
		play.innerHTML = '<i class="fas fa-play" fa-2x></i>';
	}
	else {
		play.innerHTML = '<i class="fas fa-pause" fa-2x></i>';
	}
}

function updateProgres() {

	progres.value = (video.currentTime / video.duration) * 100;
	let mins = Math.floor(video.currentTime / 60);
	if (mins < 10) {
		mins = '0' + String(mins);
	}
	let secs = Math.floor(video.currentTime % 60);

	if(secs < 10) {
		secs = '0' + String(secs);
	}

	etampetemps.innerHTML = `${mins}:${secs}`;
}
function fixerProgresVideo() {
	video.currentTime = (progres.value * video.duration) / 100;

}
video.addEventListener('click', statusVideo);
play.addEventListener('click', statusVideo);
stope.addEventListener('click', stopVideo);

video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);

video.addEventListener('timeupdate', updateProgres);
progres.addEventListener('change', fixerProgresVideo);
