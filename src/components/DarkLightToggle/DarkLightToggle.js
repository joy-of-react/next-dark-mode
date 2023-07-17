import React from 'react';
import { Sun, Moon } from 'react-feather';

import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './DarkLightToggle.module.css';

function DarkLightToggle({ theme, handleClick }) {
  return (
    <button
      className={styles.wrapper}
      onClick={handleClick}
    >
      {theme === 'light' ? (
        <Sun size="1.5rem" />
      ) : (
        <Moon size="1.5rem" />
      )}
      <VisuallyHidden>
        Toggle dark / light mode
      </VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
