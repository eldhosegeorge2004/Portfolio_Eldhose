"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function PlacementHubCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <article className="container mt-32 mx-auto px-6 sm:px-12 max-w-4xl pb-24 text-slate-300 font-light leading-relaxed">
      
      <Link href="/#projects" className="inline-flex items-center gap-2 text-cyan hover:text-magenta transition-colors mb-8 font-mono text-sm tracking-widest uppercase">
        <ArrowLeftIcon className="w-4 h-4" /> Back to Portfolio
      </Link>

      <header className="mb-16 border-b border-white/10 pb-12">
        <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
          Placement<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-magenta">Hub</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
          An AI-powered, modular Single Page Application
        </p>
        <a 
          href="https://placementhub-o867.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-cyan hover:bg-cyan/10 hover:shadow-[0_0_20px_var(--color-cyan)] text-white font-bold tracking-widest uppercase transition-all duration-300 rounded-full"
        >
          View Live Project <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </a>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="mb-4">
            PlacementHub is an AI-powered, modular Single Page Application (SPA) designed to help students and developers prepare for technical careers. Instead of relying on expensive server-side LLM hosting, the platform introduces a "Bring Your Own Key" (BYOK) architecture, allowing users to securely leverage the Google Gemini API directly from their browser for mock interviews, dynamic quizzes, custom career roadmaps, and code debugging.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">The Problem</h2>
          <p className="mb-4">The current landscape of tech career preparation is fragmented and expensive.</p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-400 pl-4">
            <li><strong className="text-white">Cost Barriers:</strong> High-quality mock interview and code review platforms charge expensive monthly subscriptions to cover their heavy LLM server costs.</li>
            <li><strong className="text-white">Fragmented Tools:</strong> Students have to juggle multiple platforms for resume building, aptitude training, typing practice, and technical interviewing.</li>
            <li><strong className="text-white">Static Preparation:</strong> Traditional quiz and roadmap platforms offer static, generic content that doesn't adapt to the user's specific skill level or target role.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">The Solution</h2>
          <p className="mb-4">
            PlacementHub centralizes the career preparation pipeline into a single, cohesive ecosystem. By heavily utilizing Generative AI on the client side, the platform offers deeply personalized, dynamic training at zero cost to the platform host.
          </p>
          
          <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3 mt-8">Key Features:</h3>
          <ul className="space-y-4 pl-4 text-slate-300">
            <li><strong className="text-white">Interactive Mock Interviewer:</strong> An AI recruiter that analyzes user text/voice inputs and dynamically generates follow-up technical questions based on the flow of conversation.</li>
            <li><strong className="text-white">Dynamic Quiz Engine:</strong> Generates hyper-specific multiple-choice assessments (with explanations) on the fly based on user-selected topics and difficulties.</li>
            <li><strong className="text-white">Personalized Success Roadmaps:</strong> Generates actionable, week-by-week study plans tailored to a user's exact career goal (e.g., "Full Stack Developer in 3 months").</li>
            <li><strong className="text-white">AI Coding Club:</strong> A built-in code editor and AI mentor that can debug, optimize, and explain algorithms in real-time.</li>
          </ul>
        </section>

        <section className="bg-white/5 p-8 border border-white/10 rounded-2xl">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-cyan mb-6">Technical Architecture</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-2">1. Framework-less Single Page Application (SPA)</h3>
              <p className="text-slate-400 mb-2">To demonstrate strong fundamentals in web architecture, PlacementHub was built entirely without heavy frontend frameworks like React or Vue.</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 pl-4">
                <li><strong className="text-slate-300">Routing & State Management:</strong> Implemented a custom JavaScript module loader that dynamically injects and mounts modules (Quiz, Interview, Resume) into the DOM, maintaining a lightning-fast, zero-reload experience.</li>
                <li><strong className="text-slate-300">Styling:</strong> Engineered a custom CSS design system utilizing modern Glassmorphism, CSS Grid, and Flexbox, ensuring complete responsiveness across mobile, tablet, and desktop without relying on libraries like Tailwind or Bootstrap.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-2 mt-6">2. "Bring Your Own Key" (BYOK) API Strategy</h3>
              <p className="text-slate-400 mb-2">To completely eliminate server-side AI costs and ensure user privacy, the platform requires users to provide their own free Google Gemini API key.</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 pl-4">
                <li><strong className="text-slate-300">Secure Persistence:</strong> The API key is collected securely during the registration process and persisted in the browser's local storage.</li>
                <li><strong className="text-slate-300">Client-Side Generation:</strong> All prompts, context windows, and conversation histories are built within the browser memory and dispatched directly to Google's API endpoints using the @google/generative-ai SDK.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white mb-2 mt-6">3. Secure Authentication Pipeline</h3>
              <p className="text-slate-400 mb-2">User identity is managed by Supabase (PostgreSQL + GoTrue Auth).</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 pl-4">
                <li>To streamline the onboarding process, the platform converts standard usernames into mapped emails under the hood.</li>
                <li>The authentication flow was custom-engineered to strictly enforce API key collection during sign-up, actively blocking registration until a key is provided.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Key Challenges & Solutions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Challenge 1: Handling Complex AI JSON Responses Safely</h3>
              <p className="mb-2"><strong className="text-white">The Issue:</strong> The Dynamic Quiz and Roadmap modules required Gemini to return highly structured data (JSON) so the JavaScript could parse it and render interactive UI elements. However, LLMs often hallucinate markdown formatting or malformed JSON, which would crash the application.</p>
              <p><strong className="text-white">The Solution:</strong> Implemented strict prompt-engineering heuristics enforcing clean JSON output, coupled with regex-based data sanitization on the client side before parsing. This allowed the app to smoothly recover and render the UI even if the LLM wrapped the response in unexpected markdown code blocks.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Challenge 2: Auth Security & Anti-Enumeration</h3>
              <p className="mb-2"><strong className="text-white">The Issue:</strong> Supabase utilizes an "anti-enumeration" security feature to prevent malicious actors from discovering if an email exists in the database. If a user tried to register an account that already existed, Supabase would return a fake "success" response rather than an explicit error, causing the frontend logic to incorrectly log them in.</p>
              <p><strong className="text-white">The Solution:</strong> Engineered a deep validation check on the signup response object. By actively checking if the returned `identities` array was empty (Supabase's quiet signal that the user already exists), the application intercepts the fake success and successfully halts the UI, providing the user with an explicit error to switch to the Login screen.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Challenge 3: Responsive Complex Layouts</h3>
              <p className="mb-2"><strong className="text-white">The Issue:</strong> The Mock Interview module required a split-pane design (a 3D holographic avatar on the left, and a scrolling chat/input area on the right). On mobile devices, this strict grid layout resulted in overlapping elements and hidden input controls.</p>
              <p><strong className="text-white">The Solution:</strong> Abandoned fixed pixel breakpoints in favor of a fluid Flexbox/Grid wrapper. The text area and microphone controls were encapsulated into a relative flex container, allowing the microphone button to naturally pin to the edge of the text box regardless of screen size. The layout seamlessly collapses into a full-width vertical stack on screens under 900px.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-magenta/10 to-cyan/10 p-8 rounded-2xl border border-white/10 mt-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magenta to-cyan"></div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">Results & Learnings</h2>
          <p className="mb-4">Building PlacementHub was an exercise in extreme full-stack ownership.</p>
          <ul className="space-y-4 pl-4 text-slate-300">
            <li><strong className="text-white">DOM Mastery:</strong> Building an SPA without React reinforced a deep understanding of browser repaints, event delegation, and memory management.</li>
            <li><strong className="text-white">AI Integration Patterns:</strong> Mastered the complexities of integrating LLMs into production applications, including prompt chaining, context window management, and handling asynchronous stream UI states.</li>
            <li><strong className="text-white">Security First:</strong> Learned how to safely manage sensitive API keys on the client side and navigate the nuances of modern authentication providers like Supabase.</li>
          </ul>
          <p className="mt-6">PlacementHub stands as a testament to the fact that with strong fundamentals and modern APIs, incredibly powerful, personalized educational platforms can be built and scaled at virtually zero cost.</p>
        </section>

      </div>
    </article>
  );
}
