import './App.css';
import Navbar from './components/header/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/main/Home';
import About from './components/main/About';
import NotesState from './context/notes/NotesState';
import SignIn from './components/main/SignIn' 
import AddNotes from './components/main/AddNotes'
import Signup from './components/main/Signup';

function App() {
  return (
    <>
      <NotesState>
      <Router>
      <header>
         <Navbar />
      </header>
      <Routes>
      <Route exact path = '/signin' element={<SignIn />}></Route>
      <Route exact path = '/signup' element={<Signup />}></Route>
        <Route exact path = '/' element={<Home />}></Route>
        <Route exact path = '/AboutUs' element={<About />}></Route>
        <Route exact path = '/Add-Notes' element={<AddNotes />}></Route>
      </Routes>
      </Router>
      </NotesState>
    </>
  );
}

export default App;
