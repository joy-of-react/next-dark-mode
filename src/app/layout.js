'use client';
import React from 'react';
import Link from 'next/link';

import {
  LIGHT_COLORS,
  DARK_COLORS,
} from '@/constants';
import DarkLightToggle from '@/components/DarkLightToggle';

import './styles.css';

function RootLayout({ children }) {
  const [theme, setTheme] =
    React.useState('light');

  const COLORS =
    theme === 'light'
      ? LIGHT_COLORS
      : DARK_COLORS;

  function flipTheme() {
    setTheme(
      theme === 'light' ? 'dark' : 'light'
    );
  }

  return (
    <html
      lang="en"
      data-color-theme={theme}
      style={{
        '--color-text': COLORS.text,
        '--color-background': COLORS.background,
        '--color-primary': COLORS.primary,
        '--color-secondary': COLORS.secondary,
      }}
    >
      <body>
        <header className="site-header">
          <Link href="">Some Website</Link>
          <DarkLightToggle
            theme={theme}
            handleClick={flipTheme}
          />
        </header>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
