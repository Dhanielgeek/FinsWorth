import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FallingLines } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { userData, userToken } from '../Functions/Slice';
import toast from 'react-hot-toast';
import Logo from '../../public/images/logo.png';

const Login = () => {
  const [reveal, setReveal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setPassError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nullError, setNullError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReveal = (e) => {
    e.preventDefault();
    setReveal(!reveal);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const data = { email, password };
  const url = 'https://finsworthpro.onrender.com/api/login';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      password.length < 6 ||
      !/[a-zA-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[^a-zA-Z0-9]/.test(password)
    ) {
      setPassError(
        'Password must contain at least 6 characters including one letter, one number, and one special character.'
      );
      return;
    }

    if (!email || email.trim() === '') {
      setNullError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(url, data);
      toast.success(response.data.message, { duration: 3000 });
      dispatch(userData(response.data.data));
      dispatch(userToken(response.data.token));
      setTimeout(() => {
        navigate('/dashboard/dashboard');
      }, 3000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || 'An unexpected error occurred';
        toast.error(errorMsg, { duration: 3000 });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full px-4 h-screen flex justify-center items-center md:px-0"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="w-full md:w-96 h-[480px] shadow-xl rounded-lg flex flex-col gap-4 px-4 relative justify-center">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
        </div>
        <p className="font-semibold text-sm md:text-xl text-[#023047]">Login</p>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-[#023047]">Email</label>
            <br />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleEmail}
              value={email}
              required
              className="w-full border border-[#023047] rounded-md text-sm py-[8px] px-2 outline-none"
            />
            {nullError && <p className="text-xs text-red-500">{nullError}</p>}
            {emailError && <p className="text-xs text-red-500">{emailError}</p>}
          </div>
          <div>
            <label className="text-sm text-[#023047]">Password</label>
            <br />
            <div className="flex w-full border-[#121212] items-center">
              <input
                type={reveal ? 'text' : 'password'}
                placeholder="Enter password"
                name="password"
                onChange={handlePassword}
                value={password}
                required
                className="w-full border border-[#023047] rounded-md text-sm py-[8px] px-2 outline-none"
              />
              <i
                className={`bx ${reveal ? 'bxs-show' : 'bxs-hide'} absolute right-10 cursor-pointer`}
                onClick={handleReveal}
              ></i>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <input type="checkbox" required />
              <label className="text-xs md:text-sm text-[#023047] font-bold">
                Remember me
              </label>
            </div>
            <div>
              <Link
                to="/forgetpass"
                className="text-xs md:text-sm text-[#023047] font-bold"
              >
                Forgot password
              </Link>
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#023047] text-white text-sm py-2 rounded-sm"
          style={{ width: '100%', height: '2.5rem' }}
        >
          {loading ? (
            <FallingLines
              color="#FB8500"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          ) : (
            'Login'
          )}
        </button>

        <div className="flex items-center justify-center">
          <span className="text-sm flex-col md:flex-row flex gap-1 md:gap-2">
            Don't have an account?
            <Link
              to="/signup"
              className="text-[#fb8c10] cursor-pointer text-center"
            >
              Create Account
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
