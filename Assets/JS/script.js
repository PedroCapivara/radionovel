    const playButton = document.getElementById('playButton');
    const audioElement = document.getElementById('audioElement');

    playButton.addEventListener('click', () => {
        // Toca o áudio
        console.log("Funciona");
        audioElement.play();
    });