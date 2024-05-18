var viewer = pannellum.viewer('panorama', { 
    "autoLoad": true,
    "autoRotate": 0,
    "showControls": false,  
    "default": {
        "firstScene": "image_1",
    },

    "scenes": {
        "image_1": {
            "type": "equirectangular",
            "panorama": "Panaromic_image.jpg", 
            "hfov":200
        },
    }
});

//update degree scale
function updateDegreeScale() {
    var degreeScale = document.getElementById('degreeScale');
    var yaw = viewer.getYaw();
    if (yaw < 0) {
        yaw += 360; 
    }
    degreeScale.innerText = `${yaw.toFixed(1)}`;
}

//control buttons
document.getElementById('pan-up').addEventListener('click', function() {
    viewer.setPitch(viewer.getPitch() + 10);
    updateDegreeScale();
});
document.getElementById('pan-down').addEventListener('click', function() {
    viewer.setPitch(viewer.getPitch() - 10);
    updateDegreeScale();
});
document.getElementById('pan-left').addEventListener('click', function() {
    viewer.setYaw(viewer.getYaw() - 10);
    updateDegreeScale();
});
document.getElementById('pan-right').addEventListener('click', function() {
    viewer.setYaw(viewer.getYaw() + 10);
    updateDegreeScale();
});
document.getElementById('zoom-in').addEventListener('click', function() {
    viewer.setHfov(viewer.getHfov() - 10);
    updateDegreeScale();
});
document.getElementById('zoom-out').addEventListener('click', function() {
    viewer.setHfov(viewer.getHfov() + 10);
    updateDegreeScale();
});
document.getElementById('fullscreen').addEventListener('click', function() {
    viewer.toggleFullscreen();
    updateDegreeScale();
});


viewer.on('viewchange', updateDegreeScale);

viewer.on('mousedown', function() {
    setInterval(updateDegreeScale, 100);
});


document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("download-pdf").addEventListener("click", function() {

        var pdfUrl = 'PanoPDF.pdf';

        var anchorElement = document.createElement('a');
        anchorElement.href = pdfUrl;
        
        anchorElement.setAttribute('download', 'PanoPDF.pdf');
        
        document.body.appendChild(anchorElement);
        
        anchorElement.click();
        
        document.body.removeChild(anchorElement);
    });
});