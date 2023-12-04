// PLEASE INSTALL NPM MODULE TO VIEW THE WEBSITE 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from "react";
import Hero from './components/Home.js';
import Footer from './components/Footer.js';
import Navbar from "./components/Navbar.js";
//import Board from './components/Board';
//import './components/Board.css';
//import { Leaderboard } from './components/database';
import Leaderboard from './routes/Skills.js';
import Home from './routes/Home.js';
// import Layout from './components/Layout';
//import { SearchBar } from './components/SearchBar';
//import { SearchResultsList } from "./components/SearchResultsList";
//import Search from './components/Search';
//import { Search } from 'react-router-dom';
//import { Contact } from 'react-router-dom';
//import Search from './routes/Projects.js';
//import ContactPage from './components/ContactPage';
import Contact from './routes/Contact.js';
//import UserSearch from './components/UserSearch.js';

import Layout from './components/Layout.js';
import "./components/Layout.css"
import Projects from './components/Projects.js';
import Skills from './components/Board.js';
function App() {
  
  return (
    <div className="App">
       
      <Routes>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/> 
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
     <Navbar/>
    
    
    </div>
  );
}

export default App;
