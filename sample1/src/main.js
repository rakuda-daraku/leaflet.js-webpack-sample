import L from 'leaflet';
import '../node_modules/leaflet/dist/leaflet.css'

let map = L.map('map').setView([43.067656, 141.350857], 10);

L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
  attribution: 'Maptiles by <a href="http://mierune.co.jp/" target="_blank">MIERUNE</a>, under CC BY. Data by <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors, under ODbL.',
  maxZoom: 18
}).addTo(map);
