window.addEventListener('keydown', playSounds);
window.addEventListener('click', playSoundsByClick);

function playSoundsByClick (e) {
    const key_id = e.target.id;
    const audio = document.querySelector(`audio[key-data="${key_id}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function playSounds(e) {
    console.log(e.key);
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