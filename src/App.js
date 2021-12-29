import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

import Gear from './components/Gear';
import Gear2 from './components/Gear2';

function App() {


  return (
    <div className="content">
      <MainNav/>
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Gear />
      <Gear2 />
    </div>
  );
}

export default App;
