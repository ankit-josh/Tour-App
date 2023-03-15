import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from "react-toastify";
import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardFooter,
    MDBValidation,
    MDBBtn,
    MDBIcon,
    MDBSpinner,
  } from "mdb-react-ui-kit";
import { signup } from '../redux/feature/AuthSlice';

  const initialState ={
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    confirmPassword:""
  }


const Signup = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [formValue,setFormValue]=useState(initialState)
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const {firstName,lastName,email,password,confirmPassword}=formValue

    // useEffect(() => {
    //   error && toast.error(error)
    // }, [error])
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (password!==confirmPassword){
          return toast.error("Password should match")
        }
        if (firstName && lastName && email && password ){
            dispatch(signup({formValue,toast,navigate}))
        }
        
    }

    const onInputChange=(event)=>{
        let {name,value}=event.target
        setFormValue({...formValue,[name]:value})
    }

  return (
    <div
    
    style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign Up</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
          <div className="col-md-12">
              <MDBInput
                label="FirstName"
                type="text"
                value={firstName}
                name="firstName"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your firstname"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="LastName"
                type="text"
                value={lastName}
                name="lastName"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your LastName"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your email"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your password"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={onInputChange}
                required
                invalid
                validation="Retype password"
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
              {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Signup
              </MDBBtn>
            </div>
          </MDBValidation>
          <br />
          
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p>You have an account ? Sign In</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>

    </div>
  )
}

export default Signup