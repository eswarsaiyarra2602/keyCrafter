import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Cookies from 'js-cookie'; // Import js-cookie to handle cookies

export const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userId: '' // Add userId field for signup
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? 'http://localhost:8000/api/auth/login' // Replace with your login endpoint
      : 'http://localhost:8000/api/auth/register'; // Replace with your signup endpoint
  
    try {
      const response = await axios.post(url, formData);
  
      if (isLogin) {
        // If login is successful, store token in cookie and redirect to homepage
        if (response.data.token) {
          Cookies.set('authToken', response.data.token, { expires: 2, secure: true }); // Store token in cookie for 7 days
          setMessage('Login successful!');
          navigate('/'); // Redirect to homepage after successful login
        } else {
          setMessage(response.data.message || 'Login failed');
        }
      } else {
        setMessage(response.data.message || 'Signup successful!');
        // Clear form fields after successful signup
        setFormData({
          username: '',
          email: '',
          password: '',
          userId: ''
        });
        setIsLogin(true); // Switch to login form
        navigate('/'); // Redirect to homepage after successful signup
      }
    } catch (error) {
      // Display the error message received from the server if it exists
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message); // Display the error message from the server
      } else {
        setMessage('Something went wrong. Please try again.'); // Default error message
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-l-lg ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-r-lg ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Signup
          </button>
        </div>

        {/* Display Message */}
        {message && <div className="text-center text-red-500 mb-4">{message}</div>}

        {/* Login Form */}
        {isLogin && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-center text-2xl font-bold text-gray-700">Login</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button type="submit" className="w-full py-2 mt-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
              Login
            </button>
          </form>
        )}

        {/* Signup Form */}
        {!isLogin && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-center text-2xl font-bold text-gray-700">Signup</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">User ID</label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button type="submit" className="w-full py-2 mt-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  );
};