
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Marquee from './Components/Marquee';
import Slice from './Components/Slice';
function App() {

  return (

    <>
      <Header />
      <Marquee/>
      <Slice/>
{/* <Cards/> */}
      <Routes>
        {/* <Route path='/' element={<Dashboard />} /> */}
      </Routes>
      <Footer />
    </>

  );
}

export default App;
