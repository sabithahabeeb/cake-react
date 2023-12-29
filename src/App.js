
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer';
function App() {

  return (

    <>
      <Header />

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
<Footer/>
    </>

  );
}

export default App;
