import React from "react";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <label htmlFor="profileUpload" className="cursor-pointer">
        <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300 shadow-md">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
              Upload
            </div>
          )}
        </div>
      </label>
      <input
        id="profileUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      <p className="text-xs text-gray-500 mt-1">Tap to upload profile photo</p>
    </div>
  );
};

export default ProfilePhotoSelector;
