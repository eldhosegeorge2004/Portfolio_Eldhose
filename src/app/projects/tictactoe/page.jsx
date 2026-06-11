"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function TicTacToeCaseStudy() {
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
          Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-magenta">Tic Tac Toe</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
          A deeply modern, responsive, minimax-powered take on the classic web game.
        </p>
        <a 
          href="https://tictactoe-neon-omega.vercel.app" 
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
            Welcome to the Futuristic Tic Tac Toe app. This project reimagines the classic pen-and-paper game with a stunning neo-modern interface featuring glowing neon aesthetics, glassmorphism elements, and smooth micro-interactions.
          </p>
          <p>
            The game allows players to either challenge a friend locally or face off against an unshakeable AI opponent powered by the flawless logic of the minimax algorithm.
          </p>
        </section>

        <section className="bg-white/5 p-8 border border-white/10 rounded-2xl">
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-cyan mb-6">Technologies Used</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> HTML5</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Vanilla CSS3</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Flexbox & Grid</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Vanilla JS (ES6)</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> Minimax Algorithm</li>
            <li className="flex items-center gap-2"><span className="text-magenta">▸</span> DOM Manipulation</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Key Features</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Invincible AI Mode</h3>
              <p>Play against an AI that guarantees you'll never win—only draw! The AI is implemented using the rigorous Minimax Algorithm, meaning it calculates all possible future moves to ensure it never makes a mistake.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">2-Player Local Mode</h3>
              <p>For those times you want to play with a human, you can face off against your friends on the same screen with dynamic turn switching.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Modern UI & Animations</h3>
              <p>The interface is built using dark themes, dazzling cyan and teal neon gradients, glassmorphism containers, and custom hover animations. Keyframes pulse gently to create a living, breathing aesthetic.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Dynamic Audio</h3>
              <p>Engaging sound effects bring the game to life, providing immediate auditory feedback for clicks, wins, and draws, alongside synchronized visual highlights.</p>
            </div>
            
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-magenta mb-3">Responsive Layout</h3>
              <p>The CSS Grid foundation strictly adapts to any device, making the game perfectly playable on desktops, tablets, and smartphones without breaking the neon aesthetic.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Implementation Details</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-cyan mb-3">The Minimax Algorithm</h3>
              <p className="mb-3">The core of the invincible AI is the recursive Minimax algorithm. It generates a tree of all possible game states to the end of the game, scoring each state.</p>
              <p>If the AI wins, the score is +10. If the human wins, the score is -10. A draw is 0. The AI acts as the maximizing player, seeking the path that guarantees the highest possible score regardless of what the human player does.</p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-cyan mb-3">State Management</h3>
              <p>The entire game state is managed in vanilla JavaScript without any external libraries. A flat array represents the 9-cell grid, making win-checking extremely fast and efficient against predefined winning combinations.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-magenta/10 to-cyan/10 p-8 rounded-2xl border border-white/10 mt-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magenta to-cyan"></div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white mb-6">Conclusion</h2>
          <p className="mb-4">
            Creating the Smart Tic Tac Toe game was an excellent exercise in fundamental computer science algorithms and modern UI design. It proves that even the simplest logic games can be transformed into premium, engaging experiences with the right combination of math, design, and audio-visual feedback.
          </p>
        </section>

      </div>
    </article>
  );
}
