class Music{
    constructor(name, artist, img, songPath, time){
        this.name = name;
        this.artist = artist;
        this.img = img;
        this.songPath = songPath;
        this.time = time;
    }
}

var sorrisos = new Music('Sorrisos feat. Lourena', 'L7NNON', 'img/sorrisos.jpg', 'song/sorrisos.mp3', 240);
var leal = new Music('Leal', 'Djonga', 'img/leal.jpg', 'song/leal.mp3', 222);
var lose = new Music('Lose Yourself', 'Eminem', 'img/lose.jpg', 'song/lose.mp3', 320);
var perdicao = new Music('Perdição', 'L7NNON', 'img/perdicao.jpg', 'song/perdicao.mp3', 274);
var dizeres = new Music('Dizeres feat. Lourena e Sant', 'Rap Box', 'img/dizeres.webp', 'song/dizeres.mp3', 272);
var eu = new Music('Eu', 'Djonga', 'img/eu.jpg', 'song/eu.mp3', 313)

const sorrisosAudio = new Audio(sorrisos.songPath);
const lealAudio = new Audio(leal.songPath);
const loseAudio = new Audio(lose.songPath);
const perdicaoAudio = new Audio(perdicao.songPath);
const dizeresAudio = new Audio(dizeres.songPath)
const euAudio = new Audio(eu.songPath);
const musics = [sorrisosAudio, lealAudio, loseAudio, perdicaoAudio, dizeresAudio, euAudio];
const musicsData = [sorrisos, leal, lose, perdicao, dizeres, eu];

var box = document.getElementById('box');

var now = 0;
var condition = true;
function playSong() {
    var btnPlay = document.getElementById('btn');
    if (condition) {
        musics[now].play();
        condition = false;
        btnPlay.innerHTML = '<i class="fas fa-pause"></i>';
        setInterval(toCount(), 1000);
    } else {
        musics[now].pause();
        condition = true;
        btnPlay.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function nextSong(){
    musics[now].pause();
    musics[now].currentTime = 0;
    if (now == musics.length -1) {
        now = 0;
    } else {
        ++now
    }
    musics[now].play();
    condition = false;
    document.getElementById('btn').innerHTML = '<i class="fas fa-pause"></i>';
    if (now == 3) {
        now = 0;
    }
    var seconds = document.getElementById('seg');
    seconds.innerHTML = '00';
    var minutes = document.getElementById('min');
    minutes.innerHTML = '00';
}

function backSong(){
    musics[now].pause();
    musics[now].currentTime = 0;
    if (now == 0) {
        now = musics.length -1;
    } else {
        --now
    }
    musics[now].play();
    condition = false;
    document.getElementById('btn').innerHTML = '<i class="fas fa-pause"></i>';
}

function createBox() {
    let infoF = document.getElementById('info');
    box.removeChild(infoF);
    let newInfo = document.createElement('div');
    newInfo.id = 'info'
    let image = document.createElement('img');
    image.src = musicsData[now].img;
    let h3 = document.createElement('h3');
    let h3text = document.createTextNode(musicsData[now].name);
    let p = document.createElement('p');
    let ptext = document.createTextNode(musicsData[now].artist);
    p.appendChild(ptext);
    h3.appendChild(h3text);
    newInfo.appendChild(image);
    newInfo.appendChild(h3);
    newInfo.appendChild(p);
    box.appendChild(newInfo);
    document.body.style.backgroundImage = 'url(' + musicsData[now].img + ')';

    var durationTime = musicsData[now].time;
    var sec = durationTime % 60;
    sec = Math.floor(sec);
    var min = durationTime / 60;
    min = Math.trunc(min);
    var seconds = document.getElementById('segT');
    var minutes = document.getElementById('minT');
    if (sec < 10) {
        seconds.innerHTML = '0' + sec;
    } else {
        seconds.innerHTML = sec;
    }
    if (min < 10) {
        minutes.innerHTML = '0' + min;
    } else {
        minutes.innerHTML = min;
    }
}

var endSong = setInterval(() => {
    if (musics[now].ended) {
        nextSong();
        createBox();
    }
    rangeTime();
}, 1000);

function rangeTime() {
    var timeLine = document.getElementById('range');
    timeLine.max = musics[now].duration;
    timeLine.value = musics[now].currentTime;
    var seconds = document.getElementById('seg');
    var minutes = document.getElementById('min');
    var realTime = musics[now].currentTime;
    var rest = realTime % 60;
    rest = Math.trunc(rest);
    realTime = Math.trunc(realTime);
    var min = realTime / 60;
    min = Math.trunc(min);
    if (realTime < 60) {
        if (realTime < 10) {
            seconds.innerHTML = '0' + realTime;
        } else {
            seconds.innerHTML = realTime;
        }
    } else {
        if (rest < 10) {
            seconds.innerHTML = '0' + rest;
        } else {
            seconds.innerHTML = rest;
        }
        if (realTime > 1) {
            if (min < 10) {
                minutes.innerHTML = '0' + min;
            } else {
                minutes.innerHTML = min;
            }
        }
    }
}

function timeNow() {
    musics[now].currentTime = document.getElementById('range').value;
}