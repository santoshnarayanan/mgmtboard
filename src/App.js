import './App.css';
import Board from './pages/Board';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}

export default App;
