import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
//import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Footer from './component/Footer';
import SignUp from './pages/SignUp';
import Generator from './pages/Generator';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Navbar />
					<Routes>
						<Route exact path="/signup"element={<SignUp/>}/ >
            <Route exact path="/login"element={<LogIn/>}/ > 
            <Route exact path="/home"element={<Home/>}/ >
            <Route exact path="/generator"element={<Generator/>}/>		
            <Route exact path="/contactus"element={<ContactUs/>}/>	
						</Routes>
					<Footer />
				
			</BrowserRouter>
     
  
        
      
    </div>
  );
}

export default App;
