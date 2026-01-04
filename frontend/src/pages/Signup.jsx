import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto h-screen grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: Signup Form */}
        <div className="px-8 lg:px-24 py-12 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-gray-600 font-bold">BD</span>
              </div>
              <h1 className="text-4xl font-serif font-bold text-black">Get Started Now</h1>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-2 mb-4 w-full border border-gray-200 rounded px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium text-gray-700">Contact number</label>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Enter your Contact number"
                className="mt-2 mb-4 w-full border border-gray-200 rounded px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2 mb-4 w-full border border-gray-200 rounded px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="mt-2 mb-3 w-full border border-gray-200 rounded px-3 py-2 text-sm"
              />

              <div className="flex items-start gap-2 mb-4 text-sm">
                <input id="agree" type="checkbox" className="w-4 h-4 mt-1" />
                <label htmlFor="agree" className="text-gray-600">I agree to the <Link to="/terms" className="underline">terms & policy</Link></label>
              </div>

              <button className="w-full bg-black text-white py-2 rounded-md font-semibold mb-4">Signup</button>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-200" />
                <div className="text-xs text-gray-400">or</div>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="w-full border rounded py-2 text-sm flex items-center justify-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="google" className="w-4 h-4" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=40&h=40&fit=crop'}} />
                  Sign in with Google
                </button>
                <button className="w-full border rounded py-2 text-sm flex items-center justify-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M16.365 1.43c0 1.022-.383 2.03-1.076 2.79-.692.759-1.932 1.7-3.319 1.539-.28-1.01-.08-2.11.578-2.814C13.06 1.986 14.504 1.33 16.365 1.43zM12 6c3.996 0 7 3.31 7 7.5S15.996 21 12 21c-3.997 0-7-3.31-7-7.5S8.003 6 12 6z"/></svg>
                  Sign in with Apple
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-4">Have an account? <Link to="/" className="text-blue-600">Login</Link></p>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="hidden lg:block h-full">
          <img
            src="https://images.unsplash.com/photo-1504198266285-16528b1b3f28?w=1200&h=1200&fit=crop"
            alt="Signup Hero"
            className="w-full h-screen object-cover rounded-l-[32px]"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&h=1200&fit=crop'; }}
          />
        </div>
      </div>
    </div>
  );
}
