/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx" , "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      color:{
        orange: "#FF6442",
skyBlue: "#45BBFC",
purpleDark: "#182233",
secondaryDark: "#93A1B9"
      }
    },
  },
  plugins: [],
}
