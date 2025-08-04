import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const Login = ({ setCurrentPage }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    try {
      // TODO: Replace with real login logic
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="w-[90vw] md:w-[400px] p-8 bg-white text-black rounded-xl shadow-xl z-50">
      <h2 className="text-xl font-semibold mb-4">Welcome Back</h2>
      <p className="text-sm text-gray-600 mb-6">
        Please enter your credentials to log in.
      </p>

      {error && <div className="text-red-600 text-sm mb-4">{error}</div>}

      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Log In
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Don't have an account?{' '}
        <button
          type="button"
          className="text-blue-600 hover:underline focus:outline-none"
          onClick={() => setCurrentPage('Signup')}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
