/* Map */

const centerCoordinates = {
  lat: 59.96842,
  lng: 30.31755,
};

const shopCoordinates = {
  lat: 59.96835,
  lng: 30.31763,
};

const mapScale = 18;

//Создаем карту с координатами
const map = L.map('map')
  .setView(centerCoordinates, mapScale);

//Добавляем слой с картой
L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Добавляем на карту метки
const mainPinIcon = L.icon({
  iconUrl: '../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  shopCoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);
