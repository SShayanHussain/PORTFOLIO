/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#1a1a1a', // A deep, rich black for main background
        'dark-gray': '#2a2a2a', // For subtle backgrounds/borders, offering contrast
        'primary-red': '#e53e3e', // Your vibrant primary red
        'primary-orange': '#ed8936', // Your warm, energetic primary orange
        'accent-yellow': '#f6ad55', // An optional, slightly lighter orange/yellow for highlights
      },
      keyframes: {
        // Animation for elements fading in and moving up slightly
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Animation for elements scaling in from slightly smaller
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // A glowing pulse effect, using your primary red and orange
        pulseGlow: {
            '0%, 100%': {
                'box-shadow': '0 0 10px rgba(237, 137, 54, 0.4), 0 0 20px rgba(229, 62, 62, 0.4)'
            },
            '50%': {
                'box-shadow': '0 0 20px rgba(237, 137, 54, 0.6), 0 0 30px rgba(229, 62, 62, 0.6)'
            }
        },
        // Shifts the background position for a continuous gradient movement
        gradientShift: {
            '0%': { 'background-position': '0% 50%' },
            '100%': { 'background-position': '100% 50%' },
        },
        // A pulsing border color animation for interactive elements
        borderPulse: {
            '0%, 100%': { 'border-color': 'rgba(237, 137, 54, 0.5)' }, // Primary orange with transparency
            '50%': { 'border-color': 'rgba(229, 62, 62, 0.8)' }, // Primary red with more opacity
        },
      },
      animation: {
        // Apply the defined keyframes with duration, easing, and fill modes
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        pulseGlow: 'pulseGlow 2s infinite alternate',
        gradientShift: 'gradientShift 3s ease infinite alternate',
        borderPulse: 'borderPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}