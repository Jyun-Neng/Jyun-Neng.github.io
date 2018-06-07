window.addEventListener('keydown', playSounds);

function playSounds(e) {
    const audio = document.querySelector(`audio[key-data="${e.keyCode}"]`);
    const key = document.querySelector(`.key[key-data="${e.keyCode}"]`);
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing'); 
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));