import React from 'react';

import styles from './Icon.module.css';

export function Icon({ name }: { name: string }) {
  return (
    <div className={`fr-mr-2v ${styles.container}`}>
      <span className={`fr-icon ${name}`} />
    </div>
  );
}

export default Icon;
