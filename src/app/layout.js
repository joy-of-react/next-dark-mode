import React from 'react';
import Link from 'next/link';

import DarkLightToggle from '@/components/DarkLightToggle';

import './styles.css';

function RootLayout({ children }) {
  const isDarkMode = true;

  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="">Some Website</Link>
          <DarkLightToggle />
        </header>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
