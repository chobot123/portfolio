import './App.css';
import Home from './body/home/Home';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
        <Header />
      <div className="body">
        <Home />
      </div>
    </div>
  );
}

export default App;
