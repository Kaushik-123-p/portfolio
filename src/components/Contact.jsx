import React, { useState } from "react";

const Contact = () => {
  // State for managing form submission status
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setLoading(false);
      return;
    }

    const form = e.target;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formDataToSend,
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full text-white md:h-screen pt-64 pb-80"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              {loading ? (
                <span className="animate-spin">Submitting...</span>
              ) : (
                "Let's talk"
              )}
            </button>
          </form>

          {success && (
            <div className="mt-4 text-green-500">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-500">
              Oops! Something went wrong or the form is incomplete. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
