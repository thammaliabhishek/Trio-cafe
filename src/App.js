
import './App.css';
import Contact from './Components/Contact us/Contact';
import Gallery from './Components/Gallery/Gallery';
import Heading from './Components/NavBar/Heading';
import Logo from './Components/Second container/Logo';
import Review from './Components/Third-container/Review';


function App() {
  return (
    <div className="App">
    <Heading/>
    <Logo/>
    <Review/>
    <Gallery/>
    <Contact/>
    </div>
  );
}

export default App;
