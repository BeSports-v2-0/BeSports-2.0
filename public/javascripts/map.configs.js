let initialCoords = {
    lat: 40.393436,
    lng: -3.698019
  },
  myMap


function initMap() {
  let mapOptions = {
    center: initialCoords,
    zoom: 12,
    styles: mapStyles.ultraStyle
  }

  myMap = new google.maps.Map(document.querySelector('#placesMap'), mapOptions)
  getPlaces()

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(position => {

      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      // recolocación mapa
      const me = {
        url: '../images/me.png',
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
      }
      myMap.setCenter(currentPosition)
      markerOptions = {
        title: 'Yooooo!',
        position: currentPosition,
        map: myMap,
        icon: me,
        animation: google.maps.Animation.BOUNCE
      }
      new google.maps.Marker(markerOptions)

    }, err => console.log('Error in the geolocation service:', err))
  } else {

    console.log('Browser does not support geolocation.');
  }

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

  const iconGod = {
    url: '../images/godzilla.png',
    scaledSize: new google.maps.Size(120, 120),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  }
  new google.maps.Marker({
    title: 'Godzilla',
    position: {
      lat: 45.4642200,
      lng: 9.1905600
    },
    map: myMap,
    icon: iconGod,
    animation: google.maps.Animation.BOUNCE
  })
  places.forEach(place => {

    const center = {
      lat: place.location.latitude,
      lng: place.location.longitude
    }

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE)
      }
    }
    const icon = {
      url: '../images/mark.png',
      scaledSize: new google.maps.Size(30, 35),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    }
    let marker = new google.maps.Marker({
      title: place.title,
      position: center,
      map: myMap,
      icon: icon,
      animation: google.maps.Animation.DROP
    })
    marker.addListener('click', toggleBounce)
  })

}