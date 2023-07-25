"use client";
import React from "react";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";

import { LIGHT_COLORS, DARK_COLORS } from "@/constants";
import VisuallyHidden from "@/components/VisuallyHidden";
import { useRouter } from "next/navigation";
import styles from "./DarkLightToggle.module.css";

function DarkLightToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);
  const router = useRouter();
  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    React.startTransition(() => {
      router.refresh();
    });

    // const COLORS =
    //   nextTheme === 'light'
    //     ? LIGHT_COLORS
    //     : DARK_COLORS;

    // const root = document.documentElement;

    // root.setAttribute(
    //   'data-color-theme',
    //   nextTheme
    // );

    // root.style.setProperty(
    //   '--color-text',
    //   COLORS.text
    // );
    // root.style.setProperty(
    //   '--color-background',
    //   COLORS.background
    // );
    // root.style.setProperty(
    //   '--color-primary',
    //   COLORS.primary
    // );
    // root.style.setProperty(
    //   '--color-secondary',
    //   COLORS.secondary
    // );
  }

  return (
    <button className={styles.wrapper} onClick={handleClick}>
      {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
