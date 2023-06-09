
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
import SingleTour from './pages/SingleTour';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

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

            <Route path="/addtour" 
            element={
              <PrivateRoute>
                <AddEditTour/>
              </PrivateRoute>
            }
            />
            <Route path="/addTour/:id" 
              element={
              <PrivateRoute>
                <AddEditTour/>
              </PrivateRoute>
            }
            />
            <Route path="/editTour/:id" 
              element={
              <PrivateRoute>
                <AddEditTour/>
              </PrivateRoute>
            }
            />
            <Route path="/tour/:id" element={<SingleTour/>}/>

            <Route path="/dashboard" 
              element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }
            />
          </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
