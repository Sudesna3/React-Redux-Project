import logo from './logo.svg';

import Login from './components/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Signup from './components/pages/Signup';
// import Landingpage from './components/pages/Landingpage';
import Home from './components/pages/Homepage';

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router> */}
      {/* <Landingpage/> */}
      <Home/>
    </>
  );
}

export default App;
