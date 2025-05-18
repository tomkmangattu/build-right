import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // for running on replit
  // server: {
  //   allowedHosts: true,
  // },
});

// https://medium.com/@npguapo/installation-of-tailwind-vite-react-javascript-or-typescript-ec1abdfa56b2
