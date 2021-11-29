import { useState } from "react";


const CharacterModal = () => {
  const [playerName, setPlayerName] = useState('');

    //Add modal
   const beginGame = () => {
   const playerNameInput = document.getElementById("playerName")!.innerHTML;
   setPlayerName(playerNameInput);
   
   if (playerName) {
     document.querySelector('form')!.style.display = "none";
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