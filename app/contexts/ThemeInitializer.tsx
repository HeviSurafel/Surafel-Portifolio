"use client";

import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeInitializer() {
  const { setTheme, setMounted } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    // Validate stored theme
    const theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;

    document.documentElement.classList.toggle("dark", theme === "dark");
    setTheme(theme); // ✅ Type-safe
    setMounted(true);
  }, [setTheme, setMounted]);

  return null;
}
