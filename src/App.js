import logo from './logo.svg';
import './App.css';
import Login from './components/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
