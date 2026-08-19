import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0b192c',
          blue: '#1d4ed8',
          royal: '#2563eb',
          gold: '#fbbf24',
          slate: '#e2e8f0',
          mist: '#f8fafc',
          charcoal: '#334155',
        },
      },
      boxShadow: {
        soft: '0 14px 40px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(11,25,44,0.82), rgba(37,99,235,0.72))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
