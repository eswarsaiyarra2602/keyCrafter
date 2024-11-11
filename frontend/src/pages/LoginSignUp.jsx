import React, { useState } from 'react';

export const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Toggle Buttons */}
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

        {/* Login Form */}
        {isLogin && (
          <form className="space-y-4">
            <h2 className="text-center text-2xl font-bold text-gray-700">Login</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
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
          <form className="space-y-4">
            <h2 className="text-center text-2xl font-bold text-gray-700">Signup</h2>
            <div>
              <label className="block text-sm font-medium text-gray-600">Username</label>
              <input
                type="text"
                name='username'
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name='email'
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name='password'
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

