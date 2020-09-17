(()=>{

    $(document).ready(function () {
        const timeStamp = (unixTimestamp)=>{
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(unixTimestamp * 1000);
            // get Hours timestamp
            var hours = date.getHours();
            // get Minutes timestamp
            var minutes = "0" + date.getMinutes();
            // get Seconds timestamp
            var seconds = "0" + date.getSeconds();
            // Will display time in 10:30:23 format
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            // Return day Time Object
            return date.toLocaleDateString();

        }

        const loadingScreen = `
            <div class="col-12 text-center mt-5">
              <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
        `;

        const displayWeather = (coords)=>{
            $.get("https://api.openweathermap.org/data/2.5/onecall", {
                "appid": OPENWEATHERTOKEN,
                "units": "imperial",
                "lat" : coords ? coords[1]:29.4241,
                "lon" : coords ? coords[0]:-98.4936
            })
                .done(function (data,status,jqXhr) {
                    data.daily.forEach((d,i)=>{
                        if(i<5) weatherCard(d,i);
                    })
                })
        }

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

        const setWeatherData = (day,dayId)=>{
            $(`#${dayId}Timestamp`).html(timeStamp(day.dt));
            $(`#${dayId}MinMax`).html(`${day.temp.min}&#730F / ${day.temp.max}&#730F`);
            $(`#${dayId}Img`).attr("src",`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`);
            $(`#${dayId}Desc`).html(day.weather[0].description);
            $(`#${dayId}Humid`).html(day.humidity);
            $(`#${dayId}Wind`).html(day.wind_speed);
            $(`#${dayId}Press`).html(day.pressure);
        }
        
        // MAPBOX
        mapboxgl.accessToken = MAPBOXTOKEN;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
            center: [-98.5080428,29.4185369], // starting position [lng, lat]
            zoom: 10 // starting zoom
        });
        const getReverseGeocode = (coords) => {
            let lat = coords[0];
            let lng = coords[1];
            let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
                lat + "," + lng + ".json?access_token=" + mapboxgl.accessToken;
            $.get(url, function(data){
                $('#currentCity').html(data.features[2].place_name);
            });

        }
        const getSearchLocation = ()=> {
            let searchLocation;
            if ($('#searchField').val()) searchLocation = $('#searchField').val();
            geocode(searchLocation,MAPBOXTOKEN).then((data)=>{
                map.flyTo({center: data, zoom: 10});
                let marker = new mapboxgl.Marker({
                    draggable: true})
                    .setLngLat(data)
                    .addTo(map)
                $('#fiveDay').empty().html(loadingScreen);
                setTimeout(()=>{
                    $('#fiveDay').empty()
                    displayWeather(data);
                    getReverseGeocode(data);
                },1000);

                marker.on('dragend',function () {
                    let markerPosition = marker.getLngLat();
                    let coords = [markerPosition.lng,markerPosition.lat];
                    $('#fiveDay').empty().html(loadingScreen);
                    setTimeout(()=>{
                        $('#fiveDay').empty()
                        displayWeather(coords);
                        getReverseGeocode(coords);
                    },1000);

                })
            });

        }

        $('#locationSearch').submit(function(e){
            e.preventDefault();
            getSearchLocation();
        })
        getSearchLocation();
    })
})();