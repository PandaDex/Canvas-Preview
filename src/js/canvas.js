const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = "512"
canvas.height = "256"

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, canvas.width, canvas.height);