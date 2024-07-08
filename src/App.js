import './App.css';

import StudentsHolder from './components/StudentsHolder';
import Scoreboard from './components/ScoreBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Scoreboard />
        <StudentsHolder />
      </header>
    </div>
  );
}

export default App;
