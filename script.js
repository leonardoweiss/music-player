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
function nextSong(){
    musics[now].pause();
    musics[now].currentTime = 0;
    musics[++now].play();
    condition = false;
    document.getElementById('btn').innerHTML = 'PAUSE';
    if (now > musics.length - 1) {
        now = 0;
    }
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
}