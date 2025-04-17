console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let mastserPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songName: "Ban Ja tu meri rani", filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Teri akhiya dekh", filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Dil ka chain", filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "Hoya Na pta", filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Dheere Dheere se", filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: "Be khayali me bhi", filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Tu puch nahi hal", filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName: "Jeene Laga hu", filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songName: "Me Bhula Nahi", filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
    {songName: "Na jana", filePath: "songs/10.mp3",coverPath: "covers/10.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})
// Handle play/pause click
mastserPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mastserPlay.classList.remove('fa-play-circle');
        mastserPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        mastserPlay.classList.remove('fa-pause-circle');
        mastserPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value= Progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/' + songIndex  + '.mp3';
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        mastserPlay.classList.remove('fa-play-circle');
        mastserPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src = 'songs/' + songIndex  + '.mp3';
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    mastserPlay.classList.remove('fa-play-circle');
    mastserPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src = 'songs/' + songIndex  + '.mp3';
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    mastserPlay.classList.remove('fa-play-circle');
    mastserPlay.classList.add('fa-pause-circle');

})