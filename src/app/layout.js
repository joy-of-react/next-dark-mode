import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';

import DarkLightToggle from '@/components/DarkLightToggle';

import './styles.css';

async function RootLayout({ children }) {
  const savedTheme = (await cookies()).get('color-theme');
  const theme = savedTheme?.value || 'light';

  return (
    <html lang="en" data-color-theme={theme}>
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
