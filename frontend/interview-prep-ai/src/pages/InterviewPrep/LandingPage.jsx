import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import INTERVIEW_IMAGE from "../../assets/interview image.png";
import { LuSparkles } from 'react-icons/lu';

const LandingPage = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('Login');

  const handleCTA = () => {
    setCurrentPage('Signup');
    setOpenAuthModal(true);
    navigate('/signup');
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF3E0] relative overflow-hidden font-sans">
      {/* Background blur */}
      <div className="w-[800px] h-[800px] bg-amber-200/30 blur-[400px] rounded-full absolute -top-96 -left-96" />
      <div className="w-[800px] h-[800px] bg-sky-200/30 blur-[400px] rounded-full absolute -bottom-96 -right-96" />

      {/* Header */}
      <div className="container mx-auto px-4 pt-6 pb-16 relative z-10">
        <header className="flex justify-between items-center mb-20">
          <div className="text-xl text-gray-800 font-bold">Interview Prep AI</div>
          <button
            className="bg-white text-sm font-semibold text-gray-700 px-7 py-2.5 rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
            onClick={() => {
              setCurrentPage('Login');
              setOpenAuthModal(true);
            }}
          >
            Login / Sign Up
          </button>
        </header>

        {/* hero */}
        {/* icon + heading */}
        <div className="flex items-center gap-2 mb-4">
          <LuSparkles className="text-amber-500 text-xl" />
          <span className="text-xs text-amber-700 font-medium">AI Powered</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Heading */}
          <div className="w-full md:w-7/12">
            <h1 className="text-6xl text-gray-900 font-extrabold mb-0 leading-tight tracking-tight">
              Ace Interviews with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9324] to-[#FCD760] animate-pulse">
                AI‑Powered
              </span>{' '}
              Learning
            </h1>
          </div>

          {/* Paragraph + button */}
          <div className="w-full md:w-5/12 flex flex-col items-start md:items-end text-left md:text-right self-start">
            <p className="text-lg text-gray-700 font-bold leading-relaxed mb-4 line-clamp-2">
              Get role-specific questions, expand insights when you need them, dive deeper into concepts, and organize everything your way—from preparation to mastery — your ultimate interview toolkit is here.
            </p>
            <button
              className="bg-gray-800 text-base font-medium text-white px-8 py-3 rounded-full hover:bg-gray-700 transition-colors shadow-lg"
              onClick={handleCTA}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full relative z-10 pt-8 pb-12">
        <section className="flex justify-center">
          <img
            src={INTERVIEW_IMAGE}
            alt="Interview Preparation Overview"
            className="w-[100vw] max-w-screen-xl rounded-xl shadow-2xl border border-gray-100"
          />
        </section>
      </div>

      {/* Auth Modal */}
      {openAuthModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setOpenAuthModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{currentPage}</h2>
            <p className="text-gray-600">Authentication form goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
