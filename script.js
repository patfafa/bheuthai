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
}, 5000);

// Rainbow text effect for h3 elements
const rainbow = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'];
let colorIndex = 0;

setInterval(() => {
    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.color = rainbow[colorIndex];
    });
    colorIndex = (colorIndex + 1) % rainbow.length;
}, 1000);

// Add "You've got mail" alert on form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("You've got mail! Your message has been sent to Dr. Krit's infinite inbox!");
});
