import React, { useState } from 'react';
import emailjs from "emailjs-com";

export default function ModernContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    description: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_33autvw";
    const TEMPLATE_ID = "template_mqakyxo";
    const PUBLIC_KEY = "031phQOO8bcKWzLhr";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        (result) => {
          setSubmitted(true);
          setForm({ name: "", email: "", role: "", description: "" });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {/* Name Field */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
            letterSpacing: '0.5px'
          }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              border: 'none',
              background: '#fff',
              color: '#2a2824',
              fontSize: '14px',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'box-shadow 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Email Field */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
            letterSpacing: '0.5px'
          }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              border: 'none',
              background: '#fff',
              color: '#2a2824',
              fontSize: '14px',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'box-shadow 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Role Field */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
            letterSpacing: '0.5px'
          }}>
            Role / Position
          </label>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="e.g., Business Owner, Developer, Manager"
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              border: 'none',
              background: '#fff',
              color: '#2a2824',
              fontSize: '14px',
              fontFamily: 'inherit',
              outline: 'none',
              transition: 'box-shadow 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Description Field */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
          <label style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
            letterSpacing: '0.5px'
          }}>
            Project Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Tell us about your project, requirements, and goals..."
            required
            rows="5"
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              border: 'none',
              background: '#fff',
              color: '#2a2824',
              fontSize: '14px',
              fontFamily: 'inherit',
              outline: 'none',
              resize: 'none',
              transition: 'box-shadow 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            border: 'none',
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '6px',
            cursor: 'pointer',
            letterSpacing: '0.5px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
          }}
        >
          {submitted ? '✓ Message Sent!' : 'Send Message'}
        </button>

        {submitted && (
          <div style={{
            background: 'rgba(102, 126, 234, 0.1)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '6px',
            padding: '12px',
            color: '#a8d5ff',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            Thank you! We'll get back to you shortly.
          </div>
        )}
      </form>
    </div>
  );
}