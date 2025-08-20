import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Login from './Components/Login/SigIn';
import { Routes, Route } from 'react-router-dom';
import Catalog from './Components/catalogo/Catalog';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
