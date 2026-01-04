import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              
              <p className="text-gray-700 leading-relaxed mb-12">
                We're here to help! Reach out to us with any questions or concerns. Whether you have a query about our products, an order or just want to say hello, we'd love to hear from you.
              </p>

              {/* Our Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Our Information
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">📍</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">No.123, Galle Road, Colombo.</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">📞</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">077-2224333</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl">✉️</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">Bloomdrip@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-10 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Send us a message
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your Name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:outline-none focus:border-gray-900 transition text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your Email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:outline-none focus:border-gray-900 transition text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your Message"
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:outline-none focus:border-gray-900 transition text-gray-900 placeholder-gray-400 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded transition"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
