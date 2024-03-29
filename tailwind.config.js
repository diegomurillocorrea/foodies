module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      keyframes: {
        bouncer: {
          "50%": {
            transform: "translateX(25%)",
          },
          "0%, 100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        bouncer: "bouncer 1s ease-in-out infinite",
      },
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        "noto-sans-bold": ["Noto Sans", "sans-serif"],
        "druk-bold": ["Druk"],
        "syne-bold": ["Syne Bold"],
      },
      colors: {
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        green: {
          100: "#E8F5E8",
          200: "#C6E5C6",
          300: "#A4D5A3",
          400: "#60B65F",
          500: "#1C961A",
          600: "#198717",
          700: "#115A10",
          800: "#0D440C",
          900: "#082D08",
        },
        brown: {
          100: "#F6F0E6",
          200: "#E9DBC0",
          300: "#DBC599",
          400: "#C0994D",
          500: "#A56D01",
          600: "#956201",
          700: "#634101",
          800: "#4A3100",
          900: "#322100",
        },
        yellow: {
          100: "#FFF9E6",
          200: "#FFF1BF",
          300: "#FFE999",
          400: "#FFD84D",
          500: "#FFC700",
          600: "#E6B300",
          700: "#997700",
          800: "#735A00",
          900: "#4D3C00",
        },
        orange: {
          100: "#FDF0EE",
          200: "#FADAD4",
          300: "#F7C4B9",
          400: "#F29885",
          500: "#EC6C51",
          600: "#D46149",
          700: "#8E4131",
          800: "#6A3124",
          900: "#472018",
        },
        dark: {
          100: "#EAEBEC",
          200: "#CACCD0",
          300: "#A9ADB3",
          350: "#7B7B7B",
          400: "#69707A",
          500: "#293241",
          600: "#252D3B",
          700: "#191E27",
          800: "#12171D",
          900: "#0C0F14",
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [],
}
