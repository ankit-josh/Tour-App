
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './redux/feature/AuthSlice';
import Header from './components/Header';
import AddEditTour from './pages/AddEditTour';

function App() {

const dispatch=useDispatch()
const user = JSON.parse(localStorage.getItem("profile"));

useEffect(()=>{
  dispatch(setUser(user))
},[])
  return (
    <BrowserRouter>
        <div className="App">
        <Header/>
          <ToastContainer/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/addtour" element={<AddEditTour/>}/>
            <Route path="/addTour/:id" element={<AddEditTour/>}/>
          </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
