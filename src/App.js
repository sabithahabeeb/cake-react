
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Marquee from './Components/Marquee';
import Slice from './Components/Slice';
import Blog from './Components/Blog';
import Team from './Components/Team';
import Chocolate from './Pages/Chocolate';
function App() {

  return (

    <>
      <Header />
     
     
{/* <Cards/> */}
      <Routes>
        <Route path='/chocolate' element={<Chocolate/>}/>
        <Route path='/' element={<Dashboard />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
