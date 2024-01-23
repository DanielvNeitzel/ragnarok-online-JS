const currentMap = document.querySelector('.currentMap');
const soundGame = document.getElementById('musicGame');


function generateMapAndNpcs(mapName) {
  switch (mapName) {
    case 'Tutorial_0_1':
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