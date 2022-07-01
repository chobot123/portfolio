import './App.css';
import Home from './body/home/Home';
import Header from './header/Header';
import About from './body/about/About';
import { useState, useEffect } from 'react';

function App() {

  const [bodyHeight, setbodyHeight] = useState(0);

  const getComponentHeight = () => {
    const headerHeight = document.querySelector(".header").offsetHeight;
    const bodyHeight = document.body.offsetHeight;
    return bodyHeight - headerHeight;
  }

  useEffect(()=>{
    setbodyHeight(getComponentHeight());
  }, [bodyHeight])

  return (
    <div className="App">
        <Header />
      <div className="body">
        <Home homeHeight={bodyHeight}/>
        <About aboutHeight={bodyHeight}/>
      </div>
    </div>
  );
}

export default App;
