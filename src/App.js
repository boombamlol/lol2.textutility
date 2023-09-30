
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
// import Footer from './Components/Footer';
import About from './Components/About';
import Footer from './Components/Footer';
import DarkMode from './Components/DarkMode';
import {  
  BrowserRouter as Router, 
  Routes,
  Route,
 } from "react-router-dom";





function App() {
  return (
    <>
      <Router>
      <Navbar title="LOL.TextUtils" aboutText=" About TextUtils"  />
      <DarkMode />
        <Routes> 
      <Route path='/'element={<TextForms heading="Enter your Text To Analyze here" />}/> 
      <Route path='/about' element={<About /> }/>    
        </Routes>
       
       <Footer />
</Router>
    </>
  );
}

export default App;
