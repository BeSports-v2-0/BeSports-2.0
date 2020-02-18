

//const axios = require("axios")


function iniciarMap() {

    let coord = { lat: 40.373258, lng: - 3.690918 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: coord
    });

    let marker = new google.maps.Marker({
        position: showmarker.data(['@graph'[2].references.location]),
        map: map
    });

}

function showmarker() {
    return axios.get("https://datos.madrid.es/egob/catalogo/300261-0-agenda-proximas-carreras.json")

}




