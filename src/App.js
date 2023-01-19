import './index.css';
import Game from './components/Game';
import { GameProvider } from './context/GameContext';
import {PopupProvider} from './popup/PopupContext';
import PopupAlert from './popup/PopupAlert';

function App() {
  return (
    <GameProvider>
      <PopupProvider>
        <PopupAlert />
        <Game />
      </PopupProvider>
    </GameProvider>
  );
}

export default App;
