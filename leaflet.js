//navbar links
var navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.click();

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
      threshold: 0.5 
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

var map = L.map('mapid').setView([50.0126, 1.4989],1.5);

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

map.addLayer(satelliteLayer);

var baseLayers = {
    "OpenStreetMap": osmLayer,
    "Esri Street Map": esriLayer,
    "OpenTopoMap": terrainLayer,
    "Esri Satellite": satelliteLayer
};

L.control.layers(baseLayers).addTo(map);

var franceMarker = L.marker([50.0126, 1.4989]).addTo(map);

var francePopupContent = document.getElementById('francePopupContent').innerHTML;

var francePopup = L.popup().setContent(francePopupContent);

franceMarker.on('mouseover', function () {
    francePopup.setLatLng(franceMarker.getLatLng()).openOn(map);
});



function zoomToFrance() {
    map.setView([50.0126, 1.4989], 10);

    var francePopupContent = document.getElementById('francePopupContent').innerHTML;

    var francePopup = L.popup().setContent(francePopupContent);

    francePopup.setLatLng([50.0126, 1.4989]).openOn(map);
}





var reloadButton = L.Control.extend({
    options: {
        position: 'topright' 
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'reload-button');
        var button = L.DomUtil.create('button', '', container);
        button.innerHTML = 'Reload Map';

        L.DomEvent.on(button, 'click', function () {
            map.setView([0, 0], 1); 
        });
        return container;
    }
});

map.addControl(new reloadButton());








                                                // Hide and Show


document.addEventListener('DOMContentLoaded', function() {
    const franceDescriptionSection = document.getElementById('france-description');
    const homeSection = document.getElementById('home');
    const mapContainerSection = document.getElementById('map-container');

    franceDescriptionSection.style.display = 'none';
    mapContainerSection.style.display = 'none';
    homeSection.style.display = 'block';

    document.getElementById('description-link').addEventListener('click', function(event) {
        event.preventDefault();

        franceDescriptionSection.style.display = 'block';
        homeSection.style.display = 'none';
        mapContainerSection.style.display = 'none';
    });

    document.getElementById('home-link').addEventListener('click', function(event) {
        event.preventDefault();

        franceDescriptionSection.style.display = 'none';
        homeSection.style.display = 'block';
        mapContainerSection.style.display = 'none';
    });

    document.getElementById('map-view-link').addEventListener('click', function(event) {
        event.preventDefault();

        franceDescriptionSection.style.display = 'none';
        homeSection.style.display = 'none';
        mapContainerSection.style.display = 'block';
    });
});







































  
