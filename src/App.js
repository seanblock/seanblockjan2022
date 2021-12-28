import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/dog.png';
import MainNav from './components/MainNav';
import Home from './components/Home';
import About from './components/About';

function App() {


  return (
    <div className="content">
      <MainNav/>
      <div id="wrapper">
        {/* <div className="square"></div> */}
        <div className="pages">
          <Home />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
