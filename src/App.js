import './App.css';
import Header from './components/header/Header';
import Texts from './components/Texts/Texts';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Texts></Texts>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
