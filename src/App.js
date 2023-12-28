import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/about' Component={About} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
