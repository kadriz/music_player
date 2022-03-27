const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const timestamp = document.getElementById('timestamp');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

const close = document.getElementById('close');

const songs = ['hey','summer','ukulele'];

let songIndex = 2 ;
loadSong(songs[songIndex]);
function loadSong(song) {
title.innerText = song;
audio.src = `images/musique/${song}.mp3`;
cover.src = `images/${song}.jpg`;
}
        
function prevSong() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    loadSong(songs[songIndex]);
  playSong();
  }

  function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
  }
function updateProgress() {
    progress.value = (audio.currentTime / audio.duration) * 100;


let mins = Math.floor(audio.currentTime / 60);
if(mins < audio.duration){
  mins = '0' + String(mins);
}

// Get Seconds
let secs = Math.floor(audio.currentTime % 60);
if(secs < audio.duration){
  secs =String(secs);
}

timestamp.innerHTML = `${mins}:${secs}`;
}
function setVideoProgress() {
    audio.currentTime = (progress.value * audio.duration) / 100;
}
playBtn.addEventListener('click', playSong);

    
function playSong() {
    
    if (audio.paused){

        musicContainer.classList.add('play');

        playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';    
        audio.play();
           
    }else{
        musicContainer.classList.remove('play');

        playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>';;    
        audio.pause();
    }
}

audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setVideoProgress);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
open.addEventListener('click', () => modal.style.display="block");
close.addEventListener('click', () => modal.style.display="none");