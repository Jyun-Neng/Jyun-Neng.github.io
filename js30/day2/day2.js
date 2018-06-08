const sec_hand = document.querySelector('.sec');
const min_hand = document.querySelector('.min');
const hr_hand  = document.querySelector('.hour');

function setDate () {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr  = now.getHours();
    const sec_deg = ((sec / 60) * 360) + 90;
    const min_deg = ((min / 60) * 360) + 90;
    const hr_deg  = ((hr  / 60) * 360) + 90;

    sec_hand.style.transform = `rotate(${sec_deg}deg)`;
    min_hand.style.transform = `rotate(${min_deg}deg)`;
    hr_hand.style.transform  = `rotate(${hr_deg}deg)`;
}

setInterval(setDate, 1000);