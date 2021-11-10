import './App.css';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import Skill from './components/Skill';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
