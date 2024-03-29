import classNames from 'classnames';

import styles from './Spinner.module.css';

export function Spinner({ className, size = 'medium' }: { className?: string; size?: 'small' | 'medium' | 'large' }) {
  return (
    <picture>
      <img
        className={classNames(
          styles.spinner,
          {
            [styles['spinner--sm']]: size === 'small',
            [styles['spinner--md']]: size === 'medium',
            [styles['spinner--lg']]: size === 'large',
          },
          className,
        )}
        src="/images/spinner.svg"
        alt=""
      />
    </picture>
  );
}
