import React from 'react';
import Link from 'next/link';
import { cookies, headers } from 'next/headers';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';

import DarkLightToggle from '@/components/DarkLightToggle';

import './styles.css';

async function RootLayout({ children }) {
  const savedTheme = (await cookies()).get('color-theme');
  const themeFromHeader = (await headers()).get(
    'sec-ch-prefers-color-scheme'
  );

  const theme = savedTheme?.value || themeFromHeader || 'light';

  const themeColors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <html lang="en" data-color-theme={theme} style={themeColors}>
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
