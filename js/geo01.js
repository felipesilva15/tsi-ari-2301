const latSpan = document.getElementById('lat');
const lonSpan = document.getElementById('lon');
let lat, lon;

function getLocation(){
    if(!navigator.geolocation){
        return null;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            latSpan.innerText = pos.coords.latitude;
            lat = pos.coords.latitude;

            lonSpan.innerText = pos.coords.longitude;
            lon = pos.coords.longitude;

            initMap();
        }
    );
}

getLocation()

function initMap() {
    // The location of Uluru
    const uluru = { lat: -23.5740582, lng: -46.6235164 };

    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    });
}