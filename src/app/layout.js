import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';

import {
  LIGHT_COLORS,
  DARK_COLORS,
} from '@/constants';
import DarkLightToggle from '@/components/DarkLightToggle';

import './styles.css';

function RootLayout({ children }) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  const COLORS =
    theme === 'light'
      ? LIGHT_COLORS
      : DARK_COLORS;

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
          <DarkLightToggle initialTheme={theme} />
        </header>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
