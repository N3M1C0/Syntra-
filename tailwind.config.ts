import type { Config } from "tailwindcss"


export default {
content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
theme: {
extend: {
colors: {
brand: {
500: "#8b5cf6",
600: "#7c3aed",
},
},
backgroundImage: {
"hero-gradient":
"linear-gradient(135deg, #241433 0%, #6d28d9 45%, #ec4899 100%)",
},
},
},
plugins: [],
} satisfies Config
