class music{
    constructor(name, artist, img, songPath){
        this.name = name;
        this.artist = artist;
        this.img = img;
        this.songPath = songPath;
    }
}

var sorrisos = new music('Sorrisos feat. Lourena', 'L7NNON', 'img/sorrisos.jpg', 'song/sorrisos.mp3');
var leal = new music('Leal', 'Djonga', 'img/leal.jpg', 'song/leal.mp3');
var lose = new music('Lose Yourself', 'Eminem', 'img/lose.jpg', 'song/lose.mp3');

const sorrisosAudio = new Audio(sorrisos.songPath);
const lealAudio = new Audio(leal.songPath);
const loseAudio = new Audio(lose.songPath);
const musics = [sorrisosAudio, lealAudio, loseAudio];
const musicsData = [sorrisos, leal, lose];

var box = document.getElementById('box');

var now = 0;
var condition = true;
function playSong() {
    var btnPlay = document.getElementById('btn');
    if (condition) {
        musics[now].play();
        condition = false;
        btnPlay.innerHTML = 'PAUSE';
    } else {
        musics[now].pause();
        condition = true;
        btnPlay.innerHTML = 'PLAY';
    }
}

var info = document.getElementById('info');
var image = document.createElement('img');
image.src = musicsData[now].img;
var h3 = document.createElement('h3');
var h3text = document.createTextNode(musicsData[now].name);
let p = document.createElement('p');
let ptext = document.createTextNode(musicsData[now].artist);
p.appendChild(ptext);
h3.appendChild(h3text);
info.appendChild(image);
info.appendChild(h3);
info.appendChild(p);

function nextSong(){
    musics[now].pause();
    musics[now].currentTime = 0;
    musics[++now].play();
    condition = false;
    document.getElementById('btn').innerHTML = 'PAUSE';
    if (now > musics.length - 1) {
        now = 0;
    }
    
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
}

function backSong(){
    musics[now].pause();
    musics[now].currentTime = 0;
    musics[--now].play();
    condition = false;
    document.getElementById('btn').innerHTML = 'PAUSE';
    if (now < 0) {
        now = musics.length - 1;
    }

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
}