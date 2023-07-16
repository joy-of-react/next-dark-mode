import React from 'react';
import { Sun } from 'react-feather';

import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './DarkLightToggle.module.css';

function DarkLightToggle() {
  return (
    <button className={styles.wrapper}>
      <Sun size="1.5rem" />
      <VisuallyHidden>
        Toggle dark / light mode
      </VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
