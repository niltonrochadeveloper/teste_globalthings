import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          primary: {
            light: "var(--color-primary-light)",
            DEFAULT: "var(--color-primary-default)",
            dark: "var(--color-primary-dark)",
          },
          secondary: {
            light: "var(--color-secondary-light)",
            DEFAULT: "var(--color-secondary-default)",
            dark: "var(--color-secondary-dark)",
          },
          tertiary: {
            DEFAULT: "var(--color-tertiary-default)",
            light: "var(--color-tertiary-light)",
            dark: "var(--color-tertiary-dark)",
          },
          black: {
            DEFAULT: "var(--color-black-default)",
            light: "var(--color-black-light)",
            dark: "var(--color-black-dark)",
          },
          gray: {
            DEFAULT: "var(--color-gray-default)",
            light: "var(--color-gray-light)",
            dark: "var(--color-gray-dark)",
          },
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "var(--color-primary-default)",
          foreground: "hsl(var(--primary-foreground))",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary-default)",
          foreground: "hsl(var(--secondary-foreground))",
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary-default)",
          foreground: "hsl(var(--tertiary-foreground))",
          light: "var(--color-tertiary-light)",
          dark: "var(--color-tertiary-dark)",
        },
        text: {
          DEFAULT: "var(--text-color)",
          black: {
            DEFAULT: "var(--color-black-default)",
            light: "var(--color-black-light)",
            dark: "var(--color-black-dark)",
          },
          gray: {
            DEFAULT: "var(--color-gray-default)",
            light: "var(--color-gray-light)",
            dark: "var(--color-gray-dark)",
          },
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "var(--color-success)",
        },
        error: {
          DEFAULT: "var(--color-error)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
};
export default config;
