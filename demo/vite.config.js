import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default () => {
  return defineConfig({
    plugins: [react()],
 })
}