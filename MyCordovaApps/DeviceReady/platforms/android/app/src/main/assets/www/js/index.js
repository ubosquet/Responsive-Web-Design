var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        alert("deviceready event called");
        console.log("deviceready event called");
        navigator.notification.alert("deviceready event called");
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);

        var element = document.getElementById('dlDeviceInfo');
        element.innerHTML =
        '<dt>Cordova:</dt><dd>' + device.cordova + '</dd>' +
        '<dt>Model:</dt><dd>' + device.model + '</dd>' +
        '<dt>Platform:</dt><dd>' + device.platform + '</dd>' +
        '<dt>Version:</dt><dd>' + device.version + '</dd>' +
        '<dt>Manufacturer:</dt><dd>' + device.manufacturer + '</dd>';
    }
};

app.initialize();
