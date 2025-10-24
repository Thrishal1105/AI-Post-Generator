import React from 'react';

export const LinkedInIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full text-sky-400"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-labelledby="linkedin-title"
  >
    <title id="linkedin-title">LinkedIn Logo</title>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const TwitterIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full text-slate-300"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    aria-labelledby="twitter-title"
  >
    <title id="twitter-title">Twitter (X) Logo</title>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const InstagramIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-labelledby="instagram-title"
  >
    <title id="instagram-title">Instagram Logo</title>
    <defs>
        <radialGradient id="ig-gradient" cx="0.3" cy="1" r="1">
            <stop offset="0" stopColor="#FFDC80"/>
            <stop offset="0.25" stopColor="#FCAF45"/>
            <stop offset="0.5" stopColor="#F77737"/>
            <stop offset="0.75" stopColor="#F56040"/>
            <stop offset="1" stopColor="#FD1D1D"/>
        </radialGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="url(#ig-gradient)"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#ig-gradient)"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="url(#ig-gradient)"></line>
  </svg>
);

export const GeminiIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M9.5 4.5L12 2L14.5 4.5L12 7L9.5 4.5ZM4.5 9.5L2 12L4.5 14.5L7 12L4.5 9.5ZM19.5 9.5L17 12L19.5 14.5L22 12L19.5 9.5ZM9.5 19.5L12 17L14.5 19.5L12 22L9.5 19.5Z" fill="url(#gemini-gradient)"/>
        <defs>
            <linearGradient id="gemini-gradient" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7"/>
                <stop offset="1" stopColor="#6366F1"/>
            </linearGradient>
        </defs>
    </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
            <linearGradient id="sparkles-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c084fc"/>
                <stop offset="1" stopColor="#818cf8"/>
            </linearGradient>
        </defs>
        <path d="M24 6C14.058 6 6 14.058 6 24C6 33.942 14.058 42 24 42C33.942 42 42 33.942 42 24C42 14.058 33.942 6 24 6Z" stroke="url(#sparkles-gradient)" strokeWidth="2"/>
        <path d="M29 20V15C29 13.343 27.657 12 26 12H22C20.343 12 19 13.343 19 15V20H14V24H19V29C19 30.657 20.343 32 22 32H26C27.657 32 29 30.657 29 29V24H34V20H29Z" stroke="url(#sparkles-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 6L16.5 9.5L20 11L16.5 12.5L15 16L13.5 12.5L10 11L13.5 9.5L15 6Z" fill="url(#sparkles-gradient)"/>
        <path d="M35 34L36 36L38 37L36 38L35 40L34 38L32 37L34 36L35 34Z" fill="url(#sparkles-gradient)"/>
    </svg>
);

export const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
         <defs>
            <linearGradient id="rocket-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c084fc"/>
                <stop offset="1" stopColor="#818cf8"/>
            </linearGradient>
            <linearGradient id="rocket-flame-gradient" x1="24" y1="34" x2="24" y2="46" gradientUnits="userSpaceOnUse">
                <stop stopColor="#facc15"/>
                <stop offset="1" stopColor="#f87171"/>
            </linearGradient>
        </defs>
        <path d="M24.0001 6C24.0001 6 28.0001 12 28.0001 22V32C28.0001 32 27.0001 34 24.0001 34C21.0001 34 20.0001 32 20.0001 32V22C20.0001 12 24.0001 6 24.0001 6Z" stroke="url(#rocket-gradient)" strokeWidth="2" />
        <path d="M24 34C21 34 20 32 20 32V22C20 12 24 6 24 6" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
        <path d="M34 28L28 26V20L34 18C34 18 38 22 38 23C38 24 34 28 34 28Z" stroke="url(#rocket-gradient)" strokeWidth="2"/>
        <path d="M14 28L20 26V20L14 18C14 18 10 22 10 23C10 24 14 28 14 28Z" stroke="url(#rocket-gradient)" strokeWidth="2"/>
        <path d="M24 46C24 46 28 40 28 34H20C20 40 24 46 24 46Z" fill="url(#rocket-flame-gradient)"/>
    </svg>
);

export const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
            <linearGradient id="palette-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#c084fc"/>
                <stop offset="1" stopColor="#818cf8"/>
            </linearGradient>
        </defs>
        <path d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2263 39.9578 36.5 36.8517C35.5 31.8517 38.5 26.3517 42 24C38.5 21.6483 35.5 16.1483 36.5 11.1483C33.2263 8.04222 28.8556 6 24 6Z" stroke="url(#palette-gradient)" strokeWidth="2"/>
        <circle cx="16" cy="18" r="3" fill="#f87171"/>
        <circle cx="18" cy="28" r="3" fill="#34d399"/>
        <circle cx="28" cy="16" r="3" fill="#60a5fa"/>
        <circle cx="30" cy="26" r="3" fill="#facc15"/>
    </svg>
);