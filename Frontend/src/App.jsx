import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Home from './components/Home/Home';
import MyNotes from './components/notes/MyNotes';
import MySell from './components/sell/MySell'; 
import MyStore from './components/store/MyStore';
import MyContact from './components/contact/MyContact'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/SignUp" element={<SignUp />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/notes/MyNotes" element={<MyNotes />} />
          <Route path="/sell/MySell" element={<MySell />} />
          <Route path="/store/MyStore" element={<MyStore />} /> 
          <Route path="/contact/MyContact" element={<MyContact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
