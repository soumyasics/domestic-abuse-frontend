import './App.css';
import Footer from './Pages/Common/Footer/Footer';
import Home from './Pages/Common/Home/Home';
import Navbar from './Pages/Common/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Signup from './Pages/User/Signup/Signup';
import Login from './Pages/User/Login/Login';

function App() {
  return (
   <div className="container-fluid p-0">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
      <Footer />
    </div>
    
  
  );
}

export default App;
