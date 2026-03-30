import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    desc: ""
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
    <div className="contact-container">
      <form className="contact-card" onSubmit={handleSubmit}>
        <h2 className="contact-title">Contact Me</h2>

        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          style={{width: '75%'}}
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          style={{width: '75%'}}
          required
        />

        <label>Role</label>
        <input
          name="role"
          type="text"
          placeholder="Developer, Designer, Client, etc."
          value={form.role}
          onChange={handleChange}
          style={{width: '75%'}}
          required
        />

        <label>Description</label>
        <textarea
          name="desc"
          placeholder="Tell me about your request..."
          value={form.desc}
          onChange={handleChange}
          style={{width: '75%'}}
          rows="4"
          required
        />

        <button type="submit" className="contact-submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
