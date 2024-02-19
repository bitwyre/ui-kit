/** @type {import('tailwindcss').Config} */
// @ts-ignore
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx,mdx,jsx,ts}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #3B1CEA 0%, #0EA8E5 100%)",
      },
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        bw: {
          "primary-blue-50": "var(--primary-blue-50)",
          "primary-blue-100": "var(--primary-blue-100)",
          "primary-blue-200": "var(--primary-blue-200)",
          "primary-blue-300": "var(--primary-blue-300)",
          "primary-blue-400": "var(--primary-blue-400)",
          "primary-blue-500": "var(--primary-blue-500)",
          "primary-blue-600": "var(--primary-blue-600)",
          "primary-blue-700": "var(--primary-blue-700)",
          "primary-blue-800": "var(--primary-blue-800)",
          "primary-blue-900": "var(--primary-blue-900)",
          "primary-blue-950": "var(--primary-blue-950)",
          "green-50": "var(--green-50)",
          "green-100": "var(--green-100)",
          "green-200": "var(--green-200)",
          "green-300": "var(--green-300)",
          "green-400": "var(--green-400)",
          "green-500": "var(--green-500)",
          "green-600": "var(--green-600)",
          "green-700": "var(--green-700)",
          "green-800": "var(--green-800)",
          "green-900": "var(--green-900)",
          "green-950": "var(--green-950)",
          "yellow-orange-50": "var(--yellow-orange-50)",
          "yellow-orange-100": "var(--yellow-orange-100)",
          "yellow-orange-200": "var(--yellow-orange-200)",
          "yellow-orange-300": "var(--yellow-orange-300)",
          "yellow-orange-400": "var(--yellow-orange-400)",
          "yellow-orange-500": "var(--yellow-orange-500)",
          "yellow-orange-600": "var(--yellow-orange-600)",
          "yellow-orange-700": "var(--yellow-orange-700)",
          "yellow-orange-800": "var(--yellow-orange-800)",
          "yellow-orange-900": "var(--yellow-orange-900)",
          "yellow-orange-950": "var(--yellow-orange-950)",
          "red-50": "var(--red-50)",
          "red-100": "var(--red-100)",
          "red-200": "var(--red-200)",
          "red-300": "var(--red-300)",
          "red-400": "var(--red-400)",
          "red-500": "var(--red-500)",
          "red-600": "var(--red-600)",
          "red-700": "var(--red-700)",
          "red-800": "var(--red-800)",
          "red-900": "var(--red-900)",
          "red-950": "var(--red-950)",
          "cyan-blue-50": "var(--cyan-blue-50)",
          "cyan-blue-100": "var(--cyan-blue-100)",
          "cyan-blue-200": "var(--cyan-blue-200)",
          "cyan-blue-300": "var(--cyan-blue-300)",
          "cyan-blue-400": "var(--cyan-blue-400)",
          "cyan-blue-500": "var(--cyan-blue-500)",
          "cyan-blue-600": "var(--cyan-blue-600)",
          "cyan-blue-700": "var(--cyan-blue-700)",
          "cyan-blue-800": "var(--cyan-blue-800)",
          "cyan-blue-900": "var(--cyan-blue-900)",
          "cyan-blue-950": "var(--cyan-blue-950)",
          "gray-50": "var(--gray-50)",
          "gray-100": "var(--gray-100)",
          "gray-200": "var(--gray-200)",
          "gray-300": "var(--gray-300)",
          "gray-400": "var(--gray-400)",
          "gray-500": "var(--gray-500)",
          "gray-600": "var(--gray-600)",
          "gray-700": "var(--gray-700)",
          "gray-800": "var(--gray-800)",
          "gray-900": "var(--gray-900)",
          "gray-950": "var(--gray-950)",
          "navy-50": "var(--navy-50)",
          "navy-100": "var(--navy-100)",
          "navy-200": "var(--navy-200)",
          "navy-300": "var(--navy-300)",
          "navy-400": "var(--navy-400)",
          "navy-500": "var(--navy-500)",
          "navy-600": "var(--navy-600)",
          "navy-700": "var(--navy-700)",
          "navy-800": "var(--navy-800)",
          "navy-900": "var(--navy-900)",
          "navy-950": "var(--navy-950)",
          "slate-50": "var(--slate-50)",
          "slate-100": "var(--slate-100)",
          "slate-200": "var(--slate-200)",
          "slate-300": "var(--slate-300)",
          "slate-400": "var(--slate-400)",
          "slate-500": "var(--slate-500)",
          "slate-600": "var(--slate-600)",
          "slate-700": "var(--slate-700)",
          "slate-800": "var(--slate-800)",
          "slate-900": "var(--slate-900)",
          "slate-950": "var(--slate-950)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    //@ts-ignore
    require("tailwindcss-animate"),
  ],
};
