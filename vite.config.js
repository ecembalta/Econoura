import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            primary: "#252B42",
          },
          backgroundColor: {
            primary: "#252B42",
          },
        },
      },
    }),
  ],
});
