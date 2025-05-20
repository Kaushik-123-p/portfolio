import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .send(
        "service_pg2itja", // Your Service ID
        "template_fu2p2ar", // Your Template ID
        formData, // The data you're sending
        "j6_9TBUh9P0UDPQdL" // Your Public Key
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full text-white md:h-screen pt-44 pb-24"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to send me a message</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-1/2 mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 bg-transparent border-2 rounded-md text-white mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 bg-transparent border-2 rounded-md text-white mb-4"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 bg-transparent border-2 rounded-md text-white mb-4"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 transition-transform mx-auto text-white"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && (
          <p className="text-green-500 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center mt-4">
            ❌ Failed to send. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
