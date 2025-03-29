'use client';

import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { 
  HomeModernIcon, 
  UserCircleIcon, 
  RectangleStackIcon, 
  CommandLineIcon, 
  PaperAirplaneIcon 
} from '@heroicons/react/24/solid';

interface NavigationProps {
  onCollapseChange: (isCollapsed: boolean) => void;
}

export default function Navigation({ onCollapseChange }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    onCollapseChange(isCollapsed);
  }, [isCollapsed, onCollapseChange]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setIsCollapsed(false); // Close navbar after clicking a link
  };

  return (
    <nav className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 transition-all duration-300 ease-in-out border-r border-slate-700/30 shadow-lg z-50 ${isCollapsed ? 'w-32' : 'w-72'}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-6 top-6 bg-slate-800 text-white p-3 rounded-full border-2 border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 z-50 shadow-lg hover:bg-slate-700"
        aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
      >
        {isCollapsed ? (
          <Bars3Icon className="w-5 h-5" />
        ) : (
          <XMarkIcon className="w-5 h-5" />
        )}
      </button>

      {/* Header */}
      <div className={`mb-18 transition-all duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg blur opacity-25"></div>
          <div className="relative bg-slate-900/50 p-4 rounded-lg border border-violet-500/20">
            <h1 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300">
              Shivam Singh
            </h1>
            <p className="text-sm text-slate-300 mb-3 font-medium">AI Engineer & ML Specialist</p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="h-[calc(100%-20rem)] flex flex-col mt-4">
        {/* Navigation Links */}
        <div className="space-y-6">
          <a
            href="#hero"
            onClick={handleScroll}
            className={`flex items-center space-x-3 p-4 rounded-lg hover:bg-violet-500/10 transition-all duration-300 group ${isCollapsed ? 'justify-center' : ''}`}
          >
            <HomeModernIcon className={`${isCollapsed ? 'w-8 h-8' : 'w-7 h-7'} transition-all duration-300 group-hover:text-violet-400`} />
            {!isCollapsed && <span>Home</span>}
          </a>
          <a
            href="#about"
            onClick={handleScroll}
            className={`flex items-center space-x-3 p-4 rounded-lg hover:bg-violet-500/10 transition-all duration-300 group ${isCollapsed ? 'justify-center' : ''}`}
          >
            <UserCircleIcon className={`${isCollapsed ? 'w-8 h-8' : 'w-7 h-7'} transition-all duration-300 group-hover:text-violet-400`} />
            {!isCollapsed && <span>About</span>}
          </a>
          <a
            href="#projects"
            onClick={handleScroll}
            className={`flex items-center space-x-3 p-4 rounded-lg hover:bg-violet-500/10 transition-all duration-300 group ${isCollapsed ? 'justify-center' : ''}`}
          >
            <RectangleStackIcon className={`${isCollapsed ? 'w-8 h-8' : 'w-7 h-7'} transition-all duration-300 group-hover:text-violet-400`} />
            {!isCollapsed && <span>Projects</span>}
          </a>
          <a
            href="#skills"
            onClick={handleScroll}
            className={`flex items-center space-x-3 p-4 rounded-lg hover:bg-violet-500/10 transition-all duration-300 group ${isCollapsed ? 'justify-center' : ''}`}
          >
            <CommandLineIcon className={`${isCollapsed ? 'w-8 h-8' : 'w-7 h-7'} transition-all duration-300 group-hover:text-violet-400`} />
            {!isCollapsed && <span>Skills</span>}
          </a>
          <a
            href="#contact"
            onClick={handleScroll}
            className={`flex items-center space-x-3 p-4 rounded-lg hover:bg-violet-500/10 transition-all duration-300 group ${isCollapsed ? 'justify-center' : ''}`}
          >
            <PaperAirplaneIcon className={`${isCollapsed ? 'w-8 h-8' : 'w-7 h-7'} transition-all duration-300 group-hover:text-violet-400`} />
            {!isCollapsed && <span>Contact</span>}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className={`absolute bottom-6 left-6 right-6 ${isCollapsed ? 'flex justify-center space-x-4' : 'space-y-3'}`}>
        <div className={`mb-4 ${isCollapsed ? 'hidden' : ''}`}>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Connect With Me</h3>
        </div>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-slate-400 hover:text-violet-400 transition-colors duration-300 group ${isCollapsed ? '' : 'flex items-center space-x-3'}`}
        >
          <svg className={`${isCollapsed ? 'w-8 h-8' : 'w-7 h-7'} transition-all duration-300 group-hover:text-violet-400`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          {!isCollapsed && <span>GitHub</span>}
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-slate-400 hover:text-violet-400 transition-colors duration-300 group ${isCollapsed ? '' : 'flex items-center space-x-3'}`}
        >
          <svg className={`${isCollapsed ? 'w-8 h-8' : 'w-7 h-7'} transition-all duration-300 group-hover:text-violet-400`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          {!isCollapsed && <span>LinkedIn</span>}
        </a>
      </div>
    </nav>
  );
}