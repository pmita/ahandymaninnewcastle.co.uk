import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        accentBlue: {
          DEFAULT: "hsl(var(--accent-blue))",
          foreground: "hsl(var(--accent-blue))",
        },
        accentYellow: {
          DEFAULT: "hsl(var(--accent-yellow))",
          foreground: "hsl(var(--accent-yellow))",
        },
        accentGreen: {
          DEFAULT: "hsl(var(--accent-green))",
          foreground: "hsl(var(--accent-green))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
			fontFamily: {
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        lg: 'clamp(1.25rem∂, 0.61vw + 1.1rem, 1.58rem)',
        xl: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        "2xl": 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        "3xl": 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
        "4xl": 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
        "5xl": 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
        "6xl": 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
      }
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    }
  },
  plugins: [],
};
export default config;
