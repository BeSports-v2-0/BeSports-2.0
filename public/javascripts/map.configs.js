let initialCoords = {
    lat: 40.4072702,
    lng: -3.6978279
  },
  myMap

function initMap() {
  let mapOptions = {
    center: initialCoords,
    zoom: 12
  }

  myMap = new google.maps.Map(document.querySelector('#placesMap'), mapOptions)
  getPlaces()
}


function getPlaces() {

  axios.get('/sportcenter/api')
    .then(response => {
      const allPlaces = response.data
      placePlacesInMap(allPlaces)
    })
    .catch(error => console.log(error))
}


function placePlacesInMap(places) {

  places.forEach(place => {
    const center = {
      lat: place.location.latitude,
      lng: place.location.longitude
    }
    new google.maps.Marker({
      position: center,
      map: myMap,
      title: place.title
    })
  })
}