// LandingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_FEATURES } from ".../utils/data"; // Unused for now, but kept

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('Login');

  const handleCTA = () => {
    setOpenAuthModal(true);
    // Example navigation after modal:
    navigate('/signup');
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFCEF] relative overflow-hidden">
      <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[650px] absolute inset-0 m-auto" />

      <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
        <header className="flex justify-between items-center mb-16">
          <div className="text-xl text-black font-bold">Interview Prep AI</div>
          <button
            className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer"
            onClick={() => {
              setCurrentPage('Login');
              setOpenAuthModal(true);
            }}
          >
            Login / Sign Up
          </button>
        </header>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-2">
              <span className="text-xs text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                AI Powered
              </span>
            </div>
            <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
              Ace Interview with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9324] to-[#FCD760] animate-pulse font-semibold">
                AI Powered
              </span>{' '}
              Learning
            </h1>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-[17px] text-gray-900 mb-6 md:mb-0 md:mr-20">
              Get personalized interview preparation with AI. Practice with real-time
              feedback and improve your skills.
            </p>
            <button
              className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
              onClick={handleCTA}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {openAuthModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2>{currentPage}</h2>
            <button onClick={() => setOpenAuthModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
