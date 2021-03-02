/**
 * Bind on click to an element that should already be in the DOM!
 */
document.getElementById('loc').onclick = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            let coo = pos.coords.latitude + "," + pos.coords.longitude;
            document.getElementById("output").innerText = "(" + coo + ")";
            let url = "https://www.google.com/maps/@" + coo;
            document.getElementById("url").innerHTML = "<a href='" + url + "' target='_new'>See it on Google Maps</a>";
        });
    }
    else {
        document.getElementById("output").innerText = "Geolocation not available";
    }
};
