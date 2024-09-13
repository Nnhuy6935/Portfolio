import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-project": "url('../../public/background_project.png')",
      },

      animation: {
        'fade-in-out-fast': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate', 
      },
     
    }
  },
  
  plugins: [],
};


export default config;
