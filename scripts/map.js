const currentMap = document.querySelector('.currentMap');
const containerLogin = document.querySelector('.containerLogin');
const containerMap = document.querySelector('.containerMap');
const soundGame = document.getElementById('musicGame');

var onMap = false;

function generateMapAndNpcs(mapName) {
  if (mapName) {
    containerLogin.classList.add('hide');
    containerMap.classList.remove('hide');
    switch (mapName) {
      case 'Tutorial_0_1':
        onMap = true;
        soundGame.volume = 0.1;
        soundGame.src = 'audio/training_camp.mp3';
        soundGame.play();
        currentMap.style.backgroundImage = "url('../graphics/maps/tutorial_0_1_bg.png')";
        currentMap.innerHTML = `
      <img class="npcConfig sprakki" src="graphics/npcs/tutorial_guide_2.png" alt="" onclick="speak('Sprakki')">
        <span class="sprakki"></span>
      </img>
      `;
        break;

      default:
        break;
    }
  }
}
