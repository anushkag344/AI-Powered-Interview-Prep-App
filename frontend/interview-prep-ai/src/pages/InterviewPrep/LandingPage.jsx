import React, { useState } from 'react';
import INTERVIEW_IMAGE from "../../assets/interview image.png";
import { LuSparkles } from 'react-icons/lu';
import { APP_FEATURES } from '../../utils/data';
import Modal from '../../components/Loader/Modal';            
import Login from '../../pages/Auth/Login';      
import Signup from '../../pages/Auth/signup';    

const LandingPage = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('Login');

  const openModal = (page) => {
    setCurrentPage(page);
    setOpenAuthModal(true);
  };

  const closeModal = () => {
    setOpenAuthModal(false);
    setCurrentPage('Login');
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF3E0] relative overflow-hidden font-sans">
      {/* Background visuals */}
      <div className="absolute -top-96 -left-96 w-[800px] h-[800px] bg-amber-200/30 blur-[400px] rounded-full" />
      <div className="absolute -bottom-96 -right-96 w-[800px] h-[800px] bg-sky-200/30 blur-[400px] rounded-full" />

      {/* Header */}
      <div className="container mx-auto px-4 pt-6 pb-16 relative z-10">
        <header className="flex justify-between items-center mb-20">
          <h1 className="text-xl text-gray-800 font-bold">Interview Prep AI</h1>
          <button
            className="bg-orange-500 text-sm font-semibold text-white px-7 py-2.5 rounded-full shadow-md hover:bg-orange-600 transition-colors"
            onClick={() => openModal('Login')}
          >
            Login / Sign Up
          </button>
        </header>

        {/* AI Powered Label */}
        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
          <LuSparkles className="text-amber-500 text-xl" />
          <span className="text-xs text-amber-700 font-medium">AI Powered</span>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="w-full md:w-7/12 text-center md:text-left">
            <h2
              className="text-6xl text-gray-900 font-bold leading-tight tracking-tight mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ace Interviews with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9324] to-[#FCD760] animate-pulse font-bold">
                AI‑Powered
              </span>{' '}
              Learning
            </h2>
          </div>

          {/* Centered Copy + CTA */}
          <div className="w-full md:w-5/12 flex flex-col items-center text-center">
            <p className="text-lg text-gray-700 font-bold leading-relaxed mb-6">
              Get role‑specific questions, expand insights when you need them,<br />
              dive deeper into concepts, and organize everything your way — your ultimate interview toolkit is here.
            </p>
            <button
              className="bg-black text-base font-medium text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors shadow-lg"
              onClick={() => openModal('Signup')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full relative z-10 pt-8 pb-12">
        <section className="flex justify-center">
          <img
            src={INTERVIEW_IMAGE}
            alt="Interview Preparation Overview"
            className="w-full max-w-screen-xl rounded-xl shadow-2xl border border-gray-300"
          />
        </section>
      </div>

      {/* Features Section */}
      <div className="bg-orange-50 mt-10">
        <div className="container mx-auto px-4 pt-10 pb-20">
          <h3 className="text-2xl font-medium text-center mb-12">
            Features That Make You Shine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {APP_FEATURES.map(f => (
              <div
                key={f.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-colors"
              >
                <h4 className="text-base font-semibold mb-3">{f.title}</h4>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-sm bg-gray-50 text-gray-600 text-center py-5 mt-5">
        Made with ❤️ … Happy Coding!
      </footer>

      {/* Auth Modal */}
      <Modal isOpen={openAuthModal} onClose={closeModal} hideHeader>
        {currentPage === 'Login' && <Login setCurrentPage={setCurrentPage} />}
        {currentPage === 'Signup' && <Signup setCurrentPage={setCurrentPage} />}
      </Modal>
    </div>
  );
};

export default LandingPage;
