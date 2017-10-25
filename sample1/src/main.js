let L = require('leaflet');

let map = L.map('map').setView([43.067656, 141.350857], 10);

L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);
