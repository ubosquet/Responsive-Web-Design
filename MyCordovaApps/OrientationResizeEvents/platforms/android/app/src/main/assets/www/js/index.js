var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        // Handle orientation change event
        window.addEventListener('orientationchange', this.onOrientationChange);
        // Handle resize event
        window.addEventListener("resize", this.onResize);
        app.updateUI();
    },
    onOrientationChange: function () {
        console.log("Orientation change event - " + "orientation: " + window.orientation);
        app.updateUI();
    },
    onResize: function () {
        console.log("Resize event - " + "width: " + screen.width + ", height: " + screen.height);
        app.updateUI();
    },
    updateUI: function () {
        var orientation = '';
        //alert(window.orientation);
        switch (window.orientation) {
            case 0:
                orientation = 'portrait';
            break;
            case 90:
                orientation = 'landscape';
            break;
            case 180:
                orientation = 'upside-down'; // many devices do not support this one
            break;
            case -90:
                orientation = 'landscape';
            break;
            default:
                orientation = "unkown"; // should never get this one
            break;
        }
        document.getElementById('outputOrientationResize').innerHTML =
            "orientation: " + orientation + "<br/>" +
            "width: " + screen.width + ", height: " + screen.height;
    }
};

app.initialize();