import './App.css';
import CharacterModal from './Components/Modal/CharacterModal';

function App() {


  return (
    <>
  <CharacterModal />
  <section id="controls">
    <button id="attack-btn">ATTACK</button>
    <button id="heal-btn">HEAL</button>
  </section>
  <section id="displayText">

  </section>
    </>
  );
}

export default App;
