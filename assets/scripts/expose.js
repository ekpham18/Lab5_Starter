// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornDropdown = document.getElementById('horn-select')
  const hornImage = document.querySelector("[alt='No image selected']")
  //const hornAudio = document.getElementsByClassName("hidden")
  const hornAudio = document.querySelector("audio")
  hornDropdown.addEventListener('change', function() {
    const selected = event.target.value;
    hornImage.src = 'assets/images/' + selected + '.svg';
    hornAudio.src = 'assets/audio/' + selected + '.mp3';

  // code to run when the event is triggered
  }) 

  const volumeSlider = document.getElementById('volume')
  const volumeImage = document.querySelector("[alt='Volume level 2']")
  volumeSlider.addEventListener('input', function() {
    const volume = event.target.value;
    if (volume == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if(volume >=1 && volume < 33){
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
    hornAudio.volume = volume / 100;
  })

  const jsConfetti = new JSConfetti()
  const playButton = document.querySelector("button")
  playButton.addEventListener('click', function() {
    hornAudio.play();
    
    jsConfetti.addConfetti()
  })

  
}