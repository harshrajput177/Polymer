import React, { useContext, useState } from 'react';
import "./LoginPopUp.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [isChecked, setIsChecked] = useState(false);
  const [currState, setCurrState] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);  // New state for toggling password visibility

  // State for login/register data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    otp: ""  // New state for OTP
  });

  // Function to handle input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  // Function to toggle checkbox state
  const onCheckboxChange = () => {
    setIsChecked(prev => !prev);
  };

  // Function to toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  // Function to handle login/register form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    let newUrl = url;
    let payload = {};

    if (currState === "Login") {
      newUrl += "/users/login";
      payload = { email: data.email, password: data.password };
    } else if (currState === "SignUp") {
      newUrl += "/users/register";
      payload = { name: data.name, email: data.email, password: data.password };
    } else if (currState === "OTP") {
      newUrl += "/users/verify-otp";
      payload = { email: data.email, otp: data.otp };
    }

    try {
      // Show loading toast
      const toastId = toast.loading("Processing...");

      const response = await axios.post(newUrl, payload);
      toast.dismiss(toastId);

      if (response.data.success) {
        if (currState === "OTP") {
          // OTP verified, redirect to login
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          setShowLogin(false); // Close the popup
          setCurrState("Login"); // Navigate to the login page
          toast.success("OTP verified successfully. Please log in.");
        } else if (currState === "SignUp") {
          // User registered, prompt for OTP
          setCurrState("OTP");
          toast.success("Verification email sent. Please check your email.");
        } else {
          // Login successful
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          setShowLogin(false); // Close the popup
          toast.success("Login successful.");
        }
      } else {
        toast.error(response.data.message);
      }
      toast.dismiss(toastId);
      
    } catch (error) {
      console.error('Error during the login/register process:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        toast.error(`Error: ${error.response.data.message || 'An error occurred. Please try again.'}`);
      } else if (error.request) {
        console.error('Request data:', error.request);
        toast.error('No response from the server. Please try again.');
      } else {
        console.error('Error message:', error.message);
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  // Resend OTP
  const onResendOtp = async (event) => {
    event.preventDefault();
    const newUrl = `${url}/users/resend-otp`;
    const payload = { email: data.email };
  
    try {
      const toastId = toast.loading("Resending OTP...");
      const response = await axios.post(newUrl, payload);
      toast.dismiss(toastId);
  
      if (response.data.success) {
        toast.success("OTP resent successfully. Please check your email.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error during the OTP resend process:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        toast.error(`Error: ${error.response.data.message || 'An error occurred. Please try again.'}`);
      } else if (error.request) {
        console.error('Request data:', error.request);
        toast.error('No response from the server. Please try again.');
      } else {
        console.error('Error message:', error.message);
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className='login-PopUp'>
      <form onSubmit={onSubmit} className="login-PopUp-container">
        <div className="login-PopUp-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className='login-PopUp-inputs'>
          {currState === "SignUp" && <input type='text' name='name' value={data.name} onChange={onChangeHandler} placeholder='Your name' required />}
          <input type='email' name='email' value={data.email} onChange={onChangeHandler} placeholder='Your email' required />
          {currState !== "OTP" && (
            <>
              <input type={showPassword ? 'text' : 'password'} name='password' value={data.password} onChange={onChangeHandler} placeholder='Your password' required />
              <label>
                <input type='checkbox' checked={showPassword} onChange={toggleShowPassword} />
                Show password
              </label>
            </>
          )}
          {currState === "OTP" && <input type='text' name='otp' value={data.otp} onChange={onChangeHandler} placeholder='Enter OTP' required />}
          {currState === "OTP" && <a href='#' onClick={onResendOtp}> &nbsp; Resend OTP </a>}
        </div>
        <button type="submit" disabled={currState !== "Login" && !isChecked}>
          {currState === "SignUp" ? "Create Account" : currState === "OTP" ? "Verify OTP" : "Login"}
        </button>
        <div className="login-PopUp-condition">
          <input type='checkbox' checked={isChecked} onChange={onCheckboxChange} required={currState !== "Login"} />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account: <span onClick={() => setCurrState("SignUp")}>Click here</span></p>
        ) : (
          currState !== "OTP" && <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPopUp;





