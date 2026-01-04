import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function EditProfile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
  );
  const [formData, setFormData] = useState({
    name: "Shashini Poornima",
    email: "shashinipoornimal2@gmail.com",
    contact: "(+94) 0774356789",
    password: "",
    confirmPassword: ""
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Check password match
    if (name === "confirmPassword" || name === "password") {
      const newPassword = name === "password" ? value : formData.password;
      const newConfirm = name === "confirmPassword" ? value : formData.confirmPassword;
      setPasswordMatch(newPassword === newConfirm || newConfirm === "");
    }
  };

  const handleSave = () => {
    if (formData.password && !passwordMatch) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Profile updated:", formData);
    navigate("/profile");
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Edit Profile
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Profile Image Upload */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 bg-gray-200">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full opacity-0 hover:opacity-100 transition cursor-pointer">
                  <span className="text-white text-sm font-semibold text-center">
                    Click to upload image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition text-gray-900"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition text-gray-900"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Contact number
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Enter Your Contact number"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition text-gray-900"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition text-gray-900"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Enter Your Confirm password"
                  className={`w-full px-4 py-3 border rounded focus:outline-none transition text-gray-900 ${
                    passwordMatch
                      ? "border-gray-300 focus:border-gray-900"
                      : "border-red-500 focus:border-red-500"
                  }`}
                />
                {!passwordMatch && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-12">
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-3 rounded transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-black hover:bg-gray-800 text-white font-bold py-3 rounded transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
