// components/EmailSection.jsx
"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const email = form.user_email?.value;
    const subject = form.subject?.value;
    const message = form.message?.value;

    if (!email || !subject || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    console.log("Sending email with:", { email, subject, message });

    try {
      const result = await emailjs.sendForm(
        "service_uc8w0ec",        // ✅ Your EmailJS service ID
        "template_h281pu6",       // ✅ Your EmailJS template ID
        formRef.current,
        "HohwLYt8RIkUe4ONq"       // ✅ Your EmailJS public key
      );

      console.log("✅ Email sent:", result.text);
      setIsSent(true);
      setErrorMessage("");
      formRef.current.reset();
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      setErrorMessage("Something went wrong while sending the email.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-12 relative scroll-mt-24">
      <div className="bg-gradient-to-r from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 opacity-20"></div>

      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md text-lg leading-relaxed">
          I'm currently looking for new opportunities. My inbox is always open. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center border border-white/10 hover:border-cyan-500 transition-colors">
              📧
            </span>
            <div>
              <h6 className="text-white font-semibold">Email</h6>
              <p>eldhosegeorge2004@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center border border-white/10 hover:border-cyan-500 transition-colors">
              📍
            </span>
            <div>
              <h6 className="text-white font-semibold">Location</h6>
              <p>Ernakulam, Kerala, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 bg-[#181818]/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="relative">
            <input
              type="email"
              name="user_email"
              required
              className="peer bg-[#121212] border-b-2 border-[#33353F] text-gray-100 text-sm rounded-t-lg block w-full px-4 pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="jacob@gmail.com"
            />
            <label htmlFor="user_email" className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500">
              Your Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="subject"
              required
              className="peer bg-[#121212] border-b-2 border-[#33353F] text-gray-100 text-sm rounded-t-lg block w-full px-4 pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Just saying hi"
            />
            <label htmlFor="subject" className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500">
              Subject
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              required
              rows="4"
              className="peer bg-[#121212] border-b-2 border-[#33353F] text-gray-100 text-sm rounded-t-lg block w-full px-4 pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              placeholder="Let's talk about..."
            />
            <label htmlFor="message" className="absolute left-4 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-500">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="group relative w-full overflow-hidden rounded-lg bg-[#121212] p-3 text-center"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative text-white font-bold tracking-wider group-hover:scale-105 transition-transform inline-block">
              Send Message
            </span>
          </button>

          {isSent && (
            <p className="text-green-500 mt-2 text-center font-medium animate-pulse">✅ Sent successfully!</p>
          )}
          {errorMessage && (
            <p className="text-red-500 mt-2 text-center font-medium">❌ {errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
