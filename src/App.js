
import { Route, Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard'
function App() {

  return (

    <>
      <Header />

      <Router>
        <Route path='/' element={<Dashboard/>}/>
      </Router>

    </>

  );
}

export default App;
