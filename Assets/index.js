import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoVolumeControl from './plugins/AutoVolumeControl.js'
import AutoPause from './plugins/AutoPause.js'

//toggle the actual video 
var playingVid1 = false;

const video = document.querySelector('video')
const player = new MediaPlayer({
  el: video, 
  plugins: [new AutoPlay(),new AutoVolumeControl(), new AutoPause() ]})

const button = document.querySelector('.togglePlay')
button.onclick = () => player.togglePlay()

const muteButton = document.querySelector('.toggleMute');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

const nextVidBT = document.querySelector(".nextVideo");
nextVidBT.onclick = () => {
  var video = document.getElementById("video");
  var source = document.getElementById("myVideo");
  if (playingVid1){
    console.log("Cambiando a video de Imagine Dragons");
    source.setAttribute("src", "./Assets/imagine_dragons_birdsFull.mp4");
    playingVid1 = !playingVid1;
  }else{
    console.log("Cambiando a video de Queen");
    source.setAttribute(
      "src",
      "./Assets/BlidingLightsTheWeekndCoverTeddySwims.mp4"
    );
    playingVid1 = !playingVid1;
  }
  video.load();
  video.play();
}