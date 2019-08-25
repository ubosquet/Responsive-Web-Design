
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('captureButton').addEventListener('click', this.capturePicture);
        document.getElementById('captureButton').addEventListener('click', this.getLocation);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    
    },
    

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    
    getLocation : function(){
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
            function onSuccess(position) {
                var element = document.getElementById('geolocation');
                element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                    'Longitude: ' + position.coords.longitude     + '<br />' +
                                    'Timestamp: '  + position.timestamp           + '<br />' +
                                    '<hr />'  ;    //+ element.innerHTML;
            }
        
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
        
        
    },


  capturePicture : function(){
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.FILE_URI });

            function onSuccess(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
                
            }
            
            function onFail(message) {
                alert('Failed because: ' + message);
            }
           
    },

    
};

app.initialize();