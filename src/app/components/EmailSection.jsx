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
        "service_uc8w0ec",
        "template_h281pu6",
        formRef.current,
        {
          publicKey: "HohwLYt8RIkUe4ONq",
        }
      );

      console.log("✅ Email sent:", result.text);
      setIsSent(true);
      setErrorMessage("");
      formRef.current.reset();
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      setErrorMessage(error.text || "Something went wrong while sending the email. Please try again.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-12 relative scroll-mt-24">
      <div className="bg-magenta rounded-full h-80 w-80 z-0 blur-[150px] absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 opacity-20 pointer-events-none"></div>

      <div className="z-10 flex flex-col justify-center">
        <h5 className="font-[family-name:var(--font-syne)] text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-magenta to-electricPurple mb-6">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md text-lg leading-relaxed">
          I'm currently open to freelance projects, collaborations, and new opportunities. If you have an idea you'd like to discuss or simply want to connect, I'd love to hear from you.
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

      <div className="z-10 bg-obsidian/50 p-8 border border-white/5 backdrop-blur-md relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-electricPurple to-magenta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8">
          <div className="relative">
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="peer bg-transparent border-b border-white/20 text-white text-lg block w-full px-0 py-2 placeholder-transparent focus:outline-none focus:border-cyan transition-colors"
              placeholder="jacob@gmail.com"
            />
            <label htmlFor="user_email" className="absolute left-0 -top-5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan">
              Your Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="peer bg-transparent border-b border-white/20 text-white text-lg block w-full px-0 py-2 placeholder-transparent focus:outline-none focus:border-cyan transition-colors"
              placeholder="Just saying hi"
            />
            <label htmlFor="subject" className="absolute left-0 -top-5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan">
              Subject
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              className="peer bg-transparent border-b border-white/20 text-white text-lg block w-full px-0 py-2 placeholder-transparent focus:outline-none focus:border-cyan transition-colors resize-none"
              placeholder="Let's talk about..."
            />
            <label htmlFor="message" className="absolute left-0 -top-5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-cyan">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="group relative w-full overflow-hidden bg-transparent border border-white/20 p-4 text-center mt-4 transition-colors hover:border-magenta"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-magenta to-electricPurple opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <span className="relative z-10 text-white font-bold tracking-widest uppercase transition-transform inline-block group-hover:scale-105 duration-300">
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
