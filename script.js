const canvas = document.getElementById("solarSystemCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.backgroundColor = "#000000";

const scaleFactor = 0.8;

const planets = [
  { name: "Sun", radius: 20 * scaleFactor, distance: 0, angle: 0, speed: 0, color: "yellow" },
  { name: "Mercury", radius: 4 * scaleFactor, distance: 60 * scaleFactor, angle: 0, speed: 0.01, color: "gray" },
  { name: "Venus", radius: 5 * scaleFactor, distance: 100 * scaleFactor, angle: 0, speed: 0.008, color: "orange" },
  { name: "Earth", radius: 6 * scaleFactor, distance: 140 * scaleFactor, angle: 0, speed: 0.007, color: "blue" },
  { name: "Mars", radius: 4 * scaleFactor, distance: 180 * scaleFactor, angle: 0, speed: 0.005, color: "red" },
  { name: "Asteroid Belt", radius: 1 * scaleFactor, distance: 220 * scaleFactor, angle: 0, speed: 0.0, color: "gray" },
  { name: "Jupiter", radius: 15 * scaleFactor, distance: 260 * scaleFactor, angle: 0, speed: 0.002, color: "orange" },
  { name: "Saturn", radius: 14 * scaleFactor, distance: 320 * scaleFactor, angle: 0, speed: 0.0015, color: "yellow" },
  { name: "Uranus", radius: 12 * scaleFactor, distance: 360 * scaleFactor, angle: 0, speed: 0.001, color: "blue" },
  { name: "Neptune", radius: 11 * scaleFactor, distance: 400 * scaleFactor, angle: 0, speed: 0.0009, color: "blue" }
];

function drawStars() {
  ctx.fillStyle = "white";
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2;
    ctx.fillRect(x, y, size, size);
  }
}

function drawSpace() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
}

function draw() {
  drawSpace();

  for (const planet of planets) {
    const x = canvas.width / 2 + planet.distance * Math.cos(planet.angle);
    const y = canvas.height / 2 + planet.distance * Math.sin(planet.angle);

    ctx.beginPath();
    ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
    ctx.fillStyle = planet.color;
    ctx.fill();

    ctx.font = "12px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(planet.name, x - planet.radius, y + planet.radius + 15);

    planet.angle += planet.speed;
  }

  requestAnimationFrame(draw);
}

draw();