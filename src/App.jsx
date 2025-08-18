import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Login from './Components/Login/SigIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
