import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00f0ff',
          dim: 'rgba(0, 240, 255, 0.2)',
          glow: 'rgba(0, 240, 255, 0.4)',
        },
        amber: {
          DEFAULT: '#ffb800',
          dim: 'rgba(255, 184, 0, 0.2)',
        },
        green: {
          DEFAULT: '#00ff88',
        },
        red: {
          DEFAULT: '#ff3366',
        },
        'bg-deep': '#0a0a0f',
        'bg-panel': '#0d0d14',
        'bg-card': '#111118',
        'bg-elevated': '#16161f',
        border: {
          DEFAULT: '#1a1a2e',
          bright: '#2a2a3e',
        },
        'text-primary': '#e8e8f0',
        'text-secondary': '#7a7a8e',
        'text-dim': '#4a4a5e',
        void: '#0a0a0f',
      },

      fontFamily: {
        display: ['"Share Tech Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },

      boxShadow: {
        'glow-cyan': '0 0 60px rgba(0, 240, 255, 0.3)',
        'glow-cyan-sm': '0 0 20px rgba(0, 240, 255, 0.2)',
        'glow-amber': '0 0 60px rgba(255, 184, 0, 0.3)',
        'glow-green': '0 0 60px rgba(0, 255, 136, 0.3)',
      },

      animation: {
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glowPulse 2s ease-in-out infinite alternate',
      },

      keyframes: {
        cursorBlink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
