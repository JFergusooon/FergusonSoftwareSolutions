import React, { useState } from 'react';
import { Mail, User, Briefcase, MessageSquare } from 'lucide-react';
import emailjs from "emailjs-com";

export default function ModernContact() {
  const [form, setForm] = useState({
      name: "",
      email: "",
      role: "",
      description: ""
    });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your own EmailJS values
    const SERVICE_ID = "service_33autvw";
    const TEMPLATE_ID = "template_mqakyxo";
    const PUBLIC_KEY = "031phQOO8bcKWzLhr";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        (result) => {
          alert("Message sent! Thank you.");
          setForm({ name: "", email: "", role: "", desc: "" }); // reset form
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="bg-gray-700 flex items-center justify-center p-6">
      
      <div style={{display: 'flex', flexDirection: 'row'}}>
        
        <div style={{display: 'flex', flexDirection: 'column', width: "800px", alignItems: 'center', textAlign: 'center', justifyContent: 'center'}} className="w-full max-w-2xl bg-gradient-to-br from-slate-400 to-slate-500 rounded-3xl shadow-2xl p-8 border-8 border-gray-800">
        <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className="space-y-6" style={{width: '600px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
            {/* Name Field */}
            <div>
              <label className="block text-gray-900 font-bold mb-2 flex items-center gap-2">
                <User size={20} className="text-orange-600" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="px-4 py-3 rounded-xl border-4 border-gray-700 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors"
                style= {{width: '300px', height: '45px'}}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-900 font-bold mb-2 flex items-center gap-2">
                <Mail size={20} className="text-orange-600" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="px-4 py-3 rounded-xl border-4 border-gray-700 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors"
                style= {{width: '300px', height: '45px'}}
              />
            </div>

            {/* Role Field */}
            <div>
              <label className="block text-gray-900 font-bold mb-2 flex items-center gap-2">
                <Briefcase size={20} className="text-orange-600" />
                Role
              </label>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Developer, Designer, Frontend, etc."
                className="px-4 py-3 rounded-xl border-4 border-gray-700 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors"
                style= {{width: '300px', height: '45px'}}
              />
            </div>
          </div>

          <div>
            {/* Description Field */}
            <div>
              <label className="block text-gray-900 font-bold mb-2 flex items-center gap-2">
                <MessageSquare size={20} className="text-orange-600" />
                Description
              </label>
              <input
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Tell me about your request..."
                rows="5"
                className="px-4 py-3 rounded-xl border-4 border-gray-700 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-600 transition-colors resize-none"
                style= {{width: '250px', height: '232px'}}
              />
            </div>
          </div>
          

          

          
        </div>
        {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 px-12 rounded-2xl shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-6" style={{height: '250px', width: '400px'}}>
        <div className="text-center space-y-2">
          <p className="text-white font-semibold">Or reach out directly:</p>
          <p className="text-orange-300">
            <strong className="text-white">Email:</strong> <br />jfergusooon@gmail.com
          </p>
          <p className="text-orange-300">
            <strong className="text-white">LinkedIn:</strong> 
            <br />
            linkedin.com/in/jeffrey-ferguson-dev/
          </p>
          <p className="text-orange-300">
            <strong className="text-white">GitHub:</strong>
            <br /> github.com/JFergusooon
          </p>
        </div>
      </div>

    </div>
  </div>
  );
}