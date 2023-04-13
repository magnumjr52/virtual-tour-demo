var container, panorama1, panorama2, panorama3, panorama4, viewer, textureLoader1, customInfospot1, textureLoader2, customInfospot2,
textureLoader3, customInfospot3, textureLoader4, customInfospot4, infospot, bar, percentage;

container = document.querySelector('#container');
panorama1 = new PANOLENS.ImagePanorama('img/courtyard.jpeg');
panorama2 = new PANOLENS.ImagePanorama('img/cityscape.jpeg');
panorama3 = new PANOLENS.ImagePanorama('img/cyberpunk-city.jpeg');
panorama4 = new PANOLENS.ImagePanorama('img/mars-city.jpeg');
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama1, panorama2, panorama3, panorama4);

textureLoader1 = new THREE.TextureLoader();
customInfospot1 = textureLoader1.load('img/courtyard.jpeg', function() {
    infospot = new PANOLENS.Infospot(500, 'img/infospot1.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function() {
        onButtonClick(panorama2);
    });
    panorama1.add(infospot);
});

textureLoader2 = new THREE.TextureLoader();
customInfospot2 = textureLoader2.load('img/cityscape.jpeg', function() {
    infospot = new PANOLENS.Infospot(500, 'img/infospot2.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function() {
        onButtonClick(panorama3);
    });
    panorama2.add(infospot);
});
textureLoader3 = new THREE.TextureLoader();
customInfospot3 = textureLoader3.load('img/cyberpunk-city.jpeg', function() {
    infospot = new PANOLENS.Infospot(500, 'img/infospot3.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function() {
        onButtonClick(panorama4);
    });
    panorama3.add(infospot);
});
textureLoader4 = new THREE.TextureLoader();
customInfospot4 = textureLoader4.load('img/mars-city.jpeg', function() {
    infospot = new PANOLENS.Infospot(500, 'img/infospot4.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function() {
        onButtonClick(panorama1);
    });
    panorama4.add(infospot);
});

bar = document.querySelector('#bar');

function onProgressUpdate(event) {
    percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100) {
        bar.classList.add('hide');
        setTimeout(function() {
            bar.style.width = 0;
        }, 1000);
    }
}

function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}

panorama1.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);
panorama4.addEventListener('progress', onProgressUpdate);