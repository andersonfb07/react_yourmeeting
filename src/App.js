import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Ajuda from './components/pages/Ajuda';
import Contato from './components/pages/Contato';
import Login from './components/pages/Login';
import Container from "./components/layout/Container";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router>
      
      <Navbar />
      
      <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
      <Routes>
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      </Container>
      
      <Footer />
    
    </Router>
    
  );
}
export default App;
