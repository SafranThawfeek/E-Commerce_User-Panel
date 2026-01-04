import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Profile() {
  const user = {
    name: "Shashini Poornima",
    email: "shashinipoornimal2@gmail.com",
    contact: "(+94) 0774356789",
    memberType: "Gold",
    password: "••••••••••••",
    profileImage: "https://picsum.photos/300/300?random=100",
    backgroundImage: "https://picsum.photos/1200/400?random=101"
  };

  return (
    <>
      <Navbar hideSearch={true} />

      <div className="bg-white min-h-screen">
        {/* Background Image Section */}
        <div className="relative h-80 bg-gradient-to-b from-gray-400 to-gray-200 overflow-hidden">
          <img
            src={user.backgroundImage}
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-400/50 to-gray-200/50" />
        </div>

        {/* Profile Content */}
        <div className="relative px-6 pb-12">
          {/* Profile Picture */}
          <div className="flex justify-center -mt-32 mb-8">
            <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* User Info */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {user.name}
            </h1>

            {/* Info Items */}
            <div className="space-y-6">
              {/* Member Type */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">👤</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Member</span>
                  <span className="text-gray-600">:</span>
                  <span className="font-semibold text-gray-900 flex items-center gap-1">
                    {user.memberType}
                    <span className="text-xl">⭐</span>
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">✉️</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Email</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-gray-900">{user.email}</span>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Contact</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-gray-900">{user.contact}</span>
                </div>
              </div>

              {/* Password */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">🔒</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">Password</span>
                  <span className="text-gray-600">:</span>
                  <span className="text-gray-900">{user.password}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="flex justify-center">
            <Link
              to="/edit-profile"
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition"
            >
              <span>✏️</span>
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
