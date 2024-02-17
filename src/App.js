import './App.css';
import Footer from './Pages/Common/Footer/Footer';
import Home from './Pages/Common/Home/Home';
import Navbar from './Pages/Common/Navbar/Navbar';

function App() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
