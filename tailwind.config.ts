import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
type AccType = Record<string, string>;

const range = (start: number, end: number): number[] => {
  let array = [];
  for (let i = start; i <= end; ++i) {
    array.push(i);
  }
  return array;
};

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    fontSize: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        header: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
        
      },
      colors: {
        gray600: '#B6B2B2',
      },
    },
    screens: {
      mobile: "320px",
      tablet: "768px",
      pc: "1200px",
    },
    fontFamily: {
      pre: "Pretendard",
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".font-h1-semibold": {
          fontSize: pxToRem(32),
          letterSpacing: pxToRem(-0.48),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
        ".font-h2-semibold": {
          fontSize: pxToRem(32),
          letterSpacing: pxToRem(-0.32),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },

        ".font-h3-semibold": {
          fontSize: pxToRem(28),
          letterSpacing: pxToRem(-0.28),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
        ".font-title1": {
          fontSize: pxToRem(24),
          letterSpacing: pxToRem(-0.24),
          fontFamily: "Pretendard",
          fontWeight: "400",
        },
        ".font-title1-bold": {
          fontSize: pxToRem(24),
          letterSpacing: pxToRem(-0.24),
          fontWeight: "700",
          fontFamily: "Pretendard",
        },
        ".font-title1-semibold": {
          fontSize: pxToRem(24),
          letterSpacing: pxToRem(-0.48),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
        ".font-title2-bold": {
          fontSize: pxToRem(22),
          letterSpacing: pxToRem(-0.22),
          fontWeight: "700",
          fontFamily: "Pretendard",
        },
        ".font-title2-semibold": {
          fontSize: pxToRem(22),
          letterSpacing: pxToRem(-0.22),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
        ".font-title3-bold": {
          fontSize: pxToRem(20),
          letterSpacing: pxToRem(-0.2),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
        ".font-title3-semibold": {
          fontSize: pxToRem(20),
          letterSpacing: pxToRem(-0.2),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
        ".font-title3-medium": {
          fontSize: pxToRem(20),
          letterSpacing: pxToRem(-0.2),
          fontWeight: "500",
          fontFamily: "Pretendard",
        },

        ".font-body1": {
          fontSize: pxToRem(18),
          letterSpacing: pxToRem(-0.18),
          fontFamily: "Pretendard",
          fontWeight: "400",
        },
        ".font-body1-semibold": {
          fontSize: pxToRem(18),
          letterSpacing: pxToRem(-0.18),
          fontFamily: "Pretendard",
          fontWeight: "600",
        },
        ".font-body1-bold": {
          fontSize: pxToRem(18),
          letterSpacing: pxToRem(-0.18),
          fontFamily: "Pretendard",
          fontWeight: "700",
        },
        ".font-body1-medium": {
          fontSize: pxToRem(18),
          letterSpacing: pxToRem(-0.18),
          fontWeight: "500",
          fontFamily: "Pretendard",
        },
        ".font-body2": {
          fontSize: pxToRem(16),
          letterSpacing: pxToRem(-0.16),
          fontFamily: "Pretendard",
          fontWeight: "400",
        },
        ".font-body2-medium": {
          fontSize: pxToRem(16),
          letterSpacing: pxToRem(-0.16),
          fontFamily: "Pretendard",
          fontWeight: "500",
        },
        ".font-body2-bold": {
          fontSize: pxToRem(16),
          letterSpacing: pxToRem(-0.16),
          fontFamily: "Pretendard",
          fontWeight: "700",
        },
        ".font-body2-semibold": {
          fontSize: pxToRem(16),
          letterSpacing: pxToRem(-0.16),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
        ".font-caption1-medium": {
          fontSize: pxToRem(14),
          letterSpacing: pxToRem(-0.14),
          fontFamily: "Pretendard",
          fontWeight: "500",
        },
        ".font-caption1-semibold": {
          fontSize: pxToRem(14),
          letterSpacing: pxToRem(-0.14),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
        ".font-caption2": {
          fontSize: pxToRem(12),
          letterSpacing: pxToRem(-0.12),
          fontFamily: "Pretendard",
          fontWeight: "400",
        },
        ".font-caption2-medium": {
          fontSize: pxToRem(12),
          letterSpacing: pxToRem(-0.12),
          fontFamily: "Pretendard",
          fontWeight: "500",
        },
        ".font-caption2-semibold": {
          fontSize: pxToRem(12),
          letterSpacing: pxToRem(-0.12),
          fontWeight: "600",
          fontFamily: "Pretendard",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
