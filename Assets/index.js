import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoVolumeControl from './plugins/AutoVolumeControl.js'
import AutoPause from './plugins/AutoPause.js'

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