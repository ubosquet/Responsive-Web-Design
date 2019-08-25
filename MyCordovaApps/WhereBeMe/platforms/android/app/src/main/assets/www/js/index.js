var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener(
            'deviceready',
            this.onDeviceReady.bind(this),
            false
        );
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('onDeviceReady called');
        getMapLocation();
    }
};

app.initialize();

var Latitude = undefined;
var Longitude = undefined;

// Get geo coordinates

function getMapLocation() {
    console.log('getMapLocation called');
    navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, {
        enableHighAccuracy: true
    });
}

// Success callback for getting geo coordinates

var onMapSuccess = function(position) {
    console.log(
        'onMapSuccess called - latitude: ' +
            position.coords.latitude +
            ', longitude' +
            position.coords.longitude
    );
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getMap(Latitude, Longitude);
};

// Get map by using coordinates
var map;
function getMap(latitude, longitude) {
    console.log('getMap called');
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}

// Success callback for watching your changing position

var onMapWatchSuccess = function(position) {
    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {
        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getMap(updatedLatitude, updatedLongitude);
    }
};

// Error callback

function onMapError(error) {
    console.log(
        'code: ' + error.code + '\n' + 'message: ' + error.message + '\n'
    );
}

// Watch your changing position

function watchMapPosition() {
    return navigator.geolocation.watchPosition(onMapWatchSuccess, onMapError, {
        enableHighAccuracy: true
    });
}