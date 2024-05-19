//navbar links
var navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Close the navbar by finding the navbar-toggler button and triggering a click event on it
        var navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.click();

        // Remove 'active' class from all links and add it to the clicked link
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });

    link.addEventListener('mouseenter', function() {
        if (!this.href.includes('#map-container') && !this.href.includes('#overview-container')) {
            this.classList.add('hover-effect');
        }
    });

    link.addEventListener('mouseleave', function() {
        this.classList.remove('hover-effect');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var homeButton = document.getElementById('home-link');
    homeButton.classList.add('active');
});






document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 // Adjust this value as needed
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove("active"));
          navLink.classList.add("active");
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
  });
  





                                                                        // Map_View
var map = L.map('mapid').setView([50.0126, 1.4989], 6); 
var marker;
var countries = {
    'france': [50.0126, 1.4989, 10], 
    // 'united-kingdom': [52.2800, 1.3200, 10] 
};
document.getElementById('france-row').addEventListener('click', function() {
    zoomToCountry('france');
});

// document.getElementById('uk-row').addEventListener('click', function() {
//     zoomToCountry('united-kingdom');
// });
function zoomToCountry(country) {
    var coords = countries[country];
    map.setView([coords[0], coords[1]], coords[2]);
    if (marker) {
        map.removeLayer(marker);
    }
    marker = L.marker([coords[0], coords[1]]).addTo(map);
    marker.bindPopup("<b>" + country.replace("-", " ").toUpperCase() + "</b><br><img src='Panaromic_image.jpg' width='200'><br><a href='pano.html'>Click for Interaction</a>").openPopup();

    // Remove click event listener before zooming
    marker.off('click');

    // Add click event listener after zooming
    marker.on('click', function () {
        window.open('pano.html', '_blank');
    });
}




//tile layers
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var esriLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri Korea, Esri (Thailand), NGCC, (c) OpenStreetMap contributors, and the GIS user community'
});

var terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
});

var satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

//   default layers
map.addLayer(satelliteLayer);

// Define base layers
var baseLayers = {
    "OpenStreetMap": osmLayer,
    "Esri Street Map": esriLayer,
    "OpenTopoMap": terrainLayer,
    "Esri Satellite": satelliteLayer
};

L.control.layers(baseLayers).addTo(map);

var franceMarker = L.marker([50.0126, 1.4989]).addTo(map);
// var ukMarker = L.marker([52.2800, 1.3200]).addTo(map);

var francePopupContent = "<b>France</b><br><img src='Panaromic_image.jpg' width='200'><br><a href='pano.html'>Click for Interaction</a>";
// var ukPopupContent = "<b>United Kingdom</b><br><img src='uk_image.jpg' width='100'><br><a href='uk.html'>More Info</a>";

var francePopup = L.popup().setContent(francePopupContent);
// var ukPopup = L.popup().setContent(ukPopupContent);

franceMarker.on('mouseover', function () {
    francePopup.setLatLng(franceMarker.getLatLng()).openOn(map);
});

// ukMarker.on('mouseover', function () {
//     ukPopup.setLatLng(ukMarker.getLatLng()).openOn(map);
// });

franceMarker.on('click', function () {
    window.open('pano.html', '_blank');
});

// ukMarker.on('click', function () {
//     window.open('uk.html', '_blank');
// });













function showImageDescription(country) {
    // Hide all image descriptions
    var imageDescriptions = document.querySelectorAll('.image-description');
    imageDescriptions.forEach(function(description) {
      description.style.display = 'none';
    });

    // Show the image description for the clicked country
    var countryDescription = document.getElementById(country + '-description');
    if (countryDescription) {
      countryDescription.style.display = 'block';
    }
  }




























  
