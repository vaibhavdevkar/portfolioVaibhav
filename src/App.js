import './App.css'
import Header from './component/Header';
import Findme from './component/Findme';
import Education from './component/Education';
import Skills from './component/Skills';
import Contact from './component/Contact';
// import Project from './component/Project';


function App() {
 
  return (
    <div className="App">
      <Header />
      <Findme />
      <br /> 
      <Skills />
      <Education />
      // <Project />
      <Contact />
    </div>
  );
}

export default App;
  
