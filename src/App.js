import './App.css';
import Navbar from './components/header/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/main/Home';
import About from './components/main/About';

function App() {
  return (
    <>
      <Router>
      <header>
         <Navbar />
      </header>
      <Routes>
        <Route exact path = '/' element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route exact path = '/AboutUs' element={<About />}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
