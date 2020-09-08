class Location{
    constructor(address,popupHTML,img) {
        this.address = address;
        this.popupHTML = popupHTML;
        this.img = img;
    }
}
let locations = [];
locations[0] = new Location(
    "7167 Somerset Rd, San Antonio, TX 78211",
    "<p>Taqueria Mexico</p>",
    "url(img/fries.png)"
);
locations[1] = new Location(
    "910 S Alamo St, San Antonio, TX 78205",
    "<p>Rosarios Cafe</p>",
    "url(img/taco.png"
);
locations[2] = new Location(
    "218 Produce Row, San Antonio, TX 78207",
    "<p>Mi Tierra</p>",
    "url(img/happypizza.png"
);

mapboxgl.accessToken = MAPBOXTOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-day-v4', // stylesheet location
    center: [-98.5080428,29.4185369], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

let popupOptions = {
    closeButton: false
};
locations.forEach((l)=>{
    geocode(l.address,MAPBOXTOKEN).then((result)=>{
        // custom icon can be removed if needed
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = l.img;
        // end custom icon

        let popup = new mapboxgl.Popup(popupOptions).setHTML(l.popupHTML);
        let marker = new mapboxgl.Marker(el)//remove el if needed
            .setLngLat(result)
            .addTo(map)
            .setPopup(popup);
    });
})

const clearMarkers = ()=>{
    let markers = Array.from(document.getElementsByClassName('mapboxgl-marker'));
    markers.forEach((marker)=>{
        marker.remove();
    })
}
document.getElementById("clearMarker").addEventListener('click',clearMarkers)
const setZoomLevel = ()=>{
    let level = Number(document.getElementById('zoom').value);
    map.zoomTo(level);
}
document.getElementById("zoom").addEventListener('change',setZoomLevel)

const getLocation = ()=>{
    let location = document.getElementById('searchField').value
    if(location.length>0){
        geocode(location,MAPBOXTOKEN).then((result)=>{
            map.flyTo({center: result, zoom: 15});

            //custom icon for marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(img/map-icon.png)';
            //end custom icon

            let marker = new mapboxgl.Marker(el) //remove el if needed
                .setLngLat(result)
                .addTo(map)
        });
    }

}
document.getElementById('search').addEventListener('click',getLocation);