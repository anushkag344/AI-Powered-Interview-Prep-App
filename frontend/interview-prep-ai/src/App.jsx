import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import LandingPage from "./pages/InterviewPrep/LandingPage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/signup";

import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/components/InterviewPrep";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
        </Routes>

        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: '13px',
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
