// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceDropdown = document.getElementById('voice-select')
  const speaker = window.speechSynthesis;
  // Wait for voices to load, then populate dropdown
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    const voices = window.speechSynthesis.getVoices();
    
    
    voices.forEach(item => {
      let option = document.createElement('option');
      option.value = item.name;
      option.text = item.name;
      voiceDropdown.appendChild(option);
    })
  });

  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector("button");
  const face = document.querySelector("[alt='Smiling face']")
  speakButton.addEventListener('click', function() { 
    // const chosenVoice = voiceDropdown.value;
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === voiceDropdown.value);
    console.log(selectedVoice);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    face.src = 'assets/images/smiling-open.png';
    speaker.speak(utterance);
    utterance.addEventListener('end', function() {
      face.src = 'assets/images/smiling.png';
    })
  })
}