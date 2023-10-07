import './App.css'
import Header from './component/Header';
import Findme from './component/Findme';
import Education from './component/Education';
import Skills from './component/Skills';
import Contact from './component/Contact';



function App() {
 
  return (
    <div className="App">
      <Header />
      <Findme />
      <br /> 
      <Skills />
      <Education />
   
      <Contact />
    </div>
  );
}

export default App;
  
