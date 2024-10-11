import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["var(--font-playfair)", "serif"], // Playfair Display for headings
      sans: ["var(--font-lato)", "sans-serif"],   // Lato for body text
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#f0abfc",
          hover: "#f5d0fe",
        },
        keyframes: {
          lights: {
            '0%': {
              color: 'hsl(230, 40%, 80%)',
              'text-shadow': `
                0 0 1em hsla(320, 100%, 50%, 0.2),
                0 0 0.125em hsla(320, 100%, 60%, 0.3),
                -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
                1em 0.125em 0.5em hsla(200, 100%, 60%, 0)
              `,
            },
            '30%': {
              color: 'hsl(230, 80%, 90%)',
              'text-shadow': `
                0 0 1em hsla(320, 100%, 50%, 0.5),
                0 0 0.125em hsla(320, 100%, 60%, 0.5),
                -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
                0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)
              `,
            },
            '40%': {
              color: 'hsl(230, 100%, 95%)',
              'text-shadow': `
                0 0 1em hsla(320, 100%, 50%, 0.5),
                0 0 0.125em hsla(320, 100%, 90%, 0.5),
                -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
                0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4)
              `,
            },
            '70%': {
              color: 'hsl(230, 80%, 90%)',
              'text-shadow': `
                0 0 1em hsla(320, 100%, 50%, 0.5),
                0 0 0.125em hsla(320, 100%, 60%, 0.5),
                0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
                -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4)
              `,
            },
            '100%': {
              color: 'hsl(230, 40%, 80%)',
              'text-shadow': `
                0 0 1em hsla(320, 100%, 50%, 0.2),
                0 0 0.125em hsla(320, 100%, 60%, 0.3),
                1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
                -1em 0.125em 0.5em hsla(200, 100%, 60%, 0)
              `,
            },
          },
        },
        animation: {
          lights: 'lights 5s 750ms linear infinite',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
