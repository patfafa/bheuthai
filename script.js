// Animate the news ticker
anime({
    targets: '#newsTicker',
    translateX: '-100%',
    duration: 15000,
    easing: 'linear',
    loop: true
});

// Increase visitor count
let visitorCount = 1;
setInterval(() => {
    visitorCount++;
    document.getElementById('visitorCount').textContent = visitorCount.toString().padStart(6, '0');
}, 1000);

// Rainbow text effect for h3 elements
const rainbow = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'];
let colorIndex = 0;

setInterval(() => {
    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.color = rainbow[colorIndex];
    });
    colorIndex = (colorIndex + 1) % rainbow.length;
}, 500);

// Add "You've got mail" alert on form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("You've got mail! Your message has been sent to Dr. Krit's infinite inbox!");
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});

// Custom cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});

// Annoying popup
setTimeout(() => {
    alert("Congratulations! You're the 1,000,000th visitor! Click OK to claim your free Infinite Thailand Strategy!");
}, 10000);

// Audio autoplay (commented out because most browsers block autoplay)
// const audio = new Audio('https://example.com/midi-thai-national-anthem.mid');
// audio.loop = true;
// audio.play();

// Make text unselectable for extra annoyance
document.body.style.userSelect = 'none';

// Random text color changes
setInterval(() => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = "#" + randomColor;
}, 5000);