import {BrowserRouter as Router} from 'react-router-dom'

import './App.css';

import Routes from "./Routes"

import Header from "./components/metacomponents/Header"
import Navbar from "./components/metacomponents/Navbar"
import Footer from "./components/metacomponents/Footer"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Header />

        <Routes/>
        
        <Footer/>  
      </div>
    </Router>
  );
}

export default App;
