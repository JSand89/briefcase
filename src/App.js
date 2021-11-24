import './App.css';
import Header from './components/header/Header';
import Texts from './components/Texts/Texts';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom"; 
function App() {
  return (
    <div className="App">

      <Header></Header>
      <Texts></Texts>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
