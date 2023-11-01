var map = L.map('map').setView([-25.45318843660639, -49.53415404516462], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);