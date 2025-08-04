import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Input = ({ value, onChange, type = 'text', placeholder, label, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4">
      {label && <label className="text-[13px] text-slate-800 mb-1 block">{label}</label>}
      <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2">
        <input
          type={isPassword && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm"
        />
        {isPassword && (
          <>
            {showPassword ? (
              <FaRegEyeSlash
                size={20}
                className="text-slate-500 cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEye
                size={20}
                className="text-slate-400 cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
