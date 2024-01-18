import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from './components/Signup';
 
function App() {
  return (
    <>
    <NoteState>
      <Router>
      <Navbar></Navbar>
      <Alert message ="This app looks like amazing"></Alert>
        <Routes>
          <Route exact path="/home" Component={Home}/> 
           <Route exact path='/About' Component={About} />
           <Route exact path='/Login' Component={Login}/>
           <Route exact path='/Signup' Component={Signup}/>
        </Routes>
    </Router>
    </NoteState>
    </>

  );
}

export default App;
