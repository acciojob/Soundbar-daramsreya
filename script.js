//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

    sounds.forEach(sound => {
      const btn = document.querySelector(`.btn:nth-child(${sounds.indexOf(sound)+1})`);
      
      btn.addEventListener('click', () => {
        stopSongs();
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
        window.currentAudio = audio; // store current audio globally
      });
    });

    // stop button
    document.querySelector('.stop').addEventListener('click', stopSongs);

    function stopSongs() {
      if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio.currentTime = 0;
      }
    }
