let map;

async function initMap() {
  const { Map, Marker, InfoWindow } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 38.5, lng: -76.5 },
    zoom: 8,
  });


  // Add markers to the map
  const markersData = [
    { position: { lat: 38.581805, lng: -77.268023 }, title: "Powells Creek - iacobcownclwknc" },
    { position: { lat: 38.363350, lng: -75.605919 }, title: "Salisbury" },
    { position: { lat: 38.14749, lng: -76.98545 }, title: "walnut hill" },
    // Add more markers as needed
  ];

  markersData.forEach(markerInfo => {
    const marker = new google.maps.Marker({
      position: markerInfo.position,
      map: map,
      title: markerInfo.title,
    });
  
    //infowindow
    const infowindow = new InfoWindow({
      content: `<div><strong>${markerInfo.title}</strong></div>`,
      maxWidth: 300,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  });
}

//search funtion
function search() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();

  markers.forEach(marker => {
      const markerTitle = marker.getTitle().toLowerCase();

      if (markerTitle.includes(searchInput)) {
          marker.setMap(map);
      } else {
          marker.setMap(null);
      }
  });
}


initMap();
