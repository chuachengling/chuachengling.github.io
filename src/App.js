import React from "react"
import './App.css';
import {Route} from "react-router-dom"
import Home from "./components/"
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume"
import Contacts from "./components/Contacts"
import Portfolio from "./components/Portfolio"

// When you are running, do export HOST="localhost"

function App() {
  return (
    <>
    <CssBaseline/>
    <Route path = "/portfolio" component = {Home}/>
    <Route path = "/portfolio/resume" component = {Resume}/>
    <Route path = "/portfolio/projects" component = {Portfolio}/>
    <Route path = "/portfolio/contacts" component = {Contacts}/>
    </>
  );
} 

export default App;

