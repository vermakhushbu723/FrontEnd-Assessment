import './App.css';
import Footer from './componet/Footer';
import Navbar from './componet/Navbar'; // Assuming Navbar.js is in the same directory
import Section from './componet/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
