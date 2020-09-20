$(document).ready(function () {
    // Default coords for weather and map
    let defaultCoords = [-98.4936,29.4241];

    // Get Users current Location
    const getDeviceLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                defaultCoords[0] = position.coords.longitude;
                defaultCoords[1] = position.coords.latitude;
            });
        }
    }

    // Convert Unix time to JavaScript Date object * 1000  in milliseconds, not seconds.Return day
    const timeStamp = (unixTimestamp)=>{
        var date = new Date(unixTimestamp * 1000);
        return date.toLocaleDateString();
    }

    // Dynamically created bootstrap loading screen
    const loadingScreen = `
        <div class="col-12 text-center mt-5">
          <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
    `;

    // AJAX Weathermap api, get max 5 result
    const displayWeather = (coords)=>{
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            "appid": OPENWEATHERTOKEN,
            "units": "imperial",
            "lat" : coords ? coords[1]:defaultCoords[1],
            "lon" : coords ? coords[0]:defaultCoords[0]
        })
            .done(function (data,status,jqXhr) {
                data.daily.forEach((d,i)=>{
                    if(i<5) weatherCard(d,i);
                })
            })
    }

    // Dynamically create a bootstrap card for each Weathermap Day
    const weatherCard = (day,ind)=>{
        let dayId = "day"+ind;
        $('#fiveDay').append( `
            <div id="${dayId}" class="card shadow my-3">
                <div id="${dayId}Timestamp" class="card-header text-center"></div>
                <div class="card-body">
                    <p id="${dayId}MinMax" class="card-text text-center"></p>
                    <div class="card-img text-center">
                        <img id="${dayId}Img" src="" alt="">
                    </div>
                    <hr>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                        Description: <span id="${dayId}Desc" class="font-weight-bold"></span>
                        </li>
                        <li class="list-group-item">
                            Humidity: <span id="${dayId}Humid" class="font-weight-bold"></span>
                        </li>
                        <li class="list-group-item">
                            Wind:<span id="${dayId}Wind" class="font-weight-bold"></span> 
                        </li>
                        <li class="list-group-item">
                            Pressure: <span id="${dayId}Press" class="font-weight-bold"></span>
                        </li>
                    </ul>
                </div>
            </div>
        `);
        setWeatherData(day,dayId);
    }

    // Insert weathermap day data to dynamically created card
    const setWeatherData = (day,dayId)=>{
        $(`#${dayId}Timestamp`).html(timeStamp(day.dt));
        $(`#${dayId}MinMax`).html(`${day.temp.min}&#730F / ${day.temp.max}&#730F`);
        $(`#${dayId}Img`).attr("src",`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`);
        $(`#${dayId}Desc`).html(day.weather[0].description);
        $(`#${dayId}Humid`).html(day.humidity);
        $(`#${dayId}Wind`).html(day.wind_speed);
        $(`#${dayId}Press`).html(day.pressure);
    }


    // MAPBOXSECTION
    mapboxgl.accessToken = MAPBOXTOKEN;
    // Dynamically create mapbox map
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
        center: defaultCoords, // starting position [lng, lat]
        zoom: 10 // starting zoom
    });

    // Get coordinates from location name
    const geocode = (search, token) => {
        const baseUrl = 'https://api.mapbox.com';
        const endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }
    // Get location name from coordinates
    const getReverseGeocode = (coords,token) => {
        const lat = coords[0];
        const lng = coords[1];
        const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
            lat + "," + lng + ".json?access_token=" + token;
        $.get(url, function(data){
            $('#currentCity').html(data.features[2].place_name);
        });
    }
    // Get location based on user interaction w/ form or marker
    const getSearchLocation = ()=> {
        let searchLocation = defaultCoords;
        // get location from search field if any
        if ($('#searchField').val()) searchLocation = $('#searchField').val();
        geocode(searchLocation,MAPBOXTOKEN).then((data)=>{
            map.flyTo({center: data, zoom: 10});
            let marker = new mapboxgl.Marker({
                draggable: true})
                .setLngLat(data)
                .addTo(map)
            refreshWeatherMap(data);

            // get location when user drags marker
            marker.on('dragend',function () {
                const markerPosition = marker.getLngLat();
                data = [markerPosition.lng,markerPosition.lat];
                refreshWeatherMap(data);
            })
        });

    }

    // Refresh Weather and Map data based on new data;
    const refreshWeatherMap = (coords)=>{
        $('#fiveDay').empty().html(loadingScreen);
        setTimeout(()=>{
            $('#fiveDay').empty()
            displayWeather(coords);
            getReverseGeocode(coords,MAPBOXTOKEN);
        },1000);
    }

    // Search form submit function
    $('#locationSearch').submit(function(e){
        e.preventDefault();
        getSearchLocation();
    })

    //get device location and set it on html on page load
    getDeviceLocation();
    setTimeout(getSearchLocation,1200);
})
