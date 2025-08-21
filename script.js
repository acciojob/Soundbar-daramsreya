//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
    const audios = document.querySelectorAll('audio');

    function stopSongs() {
      audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');

        if (sound) {
          stopSongs();
          document.getElementById(sound).play();
        } else if (button.classList.contains('stop')) {
          stopSongs();
        }
      });
    });