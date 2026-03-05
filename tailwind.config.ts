import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'var(--bg-primary)',
        panel: 'var(--bg-card)',
        ink: 'var(--text-primary)',
        muted: 'var(--text-secondary)',
        line: 'var(--border)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent-hover)',
        accentSoft: 'var(--accent-soft)',
        success: 'var(--success)',
        successSoft: 'var(--success-soft)',
        warning: 'var(--warning)',
        dark: 'var(--bg-dark)',
        secondaryBg: 'var(--bg-secondary)'
      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-heading)', 'sans-serif']
      },
      boxShadow: {
        panel: '0 22px 60px rgba(17, 24, 39, 0.08)',
        lift: '0 16px 30px rgba(37, 99, 235, 0.14)'
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};

export default config;
