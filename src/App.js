import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/dog.png';
import MainNav from './components/MainNav';
import Home from './components/Home';

function App() {


  return (
    <div className="content">
      <MainNav/>
      <div id="wrapper">
        <div className="pages">
          <Home />


          {/* About Page */}
          <div id="about" className="page">
            About Page
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
