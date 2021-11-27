

const CharacterModal = () => {

    //Add modal
   const beginGame = () => {
   playerName = document.getElementById("playerName").value;
   player = new Creature (`${playerName}`, 30, 30, 2, 4, 4, 3, 3, 3, 18, null, longsword);
   bear = new Creature ('Bear', 45, 45, 4, 1, 4, 2, 3, 0, 15, null, bite);
   player.healsLeft = 3;
   if (player.healsLeft > 0){ player.canHeal = true; }
   bear.enemyName = player;
   player.enemyName = bear;
   rollInitiative();
   textBreak();
   if (playerName) {
     characterCreationModal.style.display = "none";
   } else alert('Please enter a name');
 };

   return (
      <div id="characterCreationModal" className="background">
    <div id="foreground">
      <form id="characterCreationForm">
        <table>
          <tr>
            <td><label htmlFor="playerName" className="formLabel">Character Name:</label></td>
            <td><input type="text" className="formInput" id="playerName" required /></td>
          </tr>
        </table>
      </form>
      <button id="beginBtn" className="btn" onClick={beginGame}>Begin</button>
    </div>
  </div>
   );
};

export default CharacterModal;