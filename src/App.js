import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/home' Component={Home} />
          <Route exact path='/about' Component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
