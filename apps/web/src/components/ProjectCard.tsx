import { fr } from '@codegouvfr/react-dsfr';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@app/web/components/ProjectCard.module.css';

export interface ProjectCardProps {
  name: string;
  location: string;
  categories: string[];
  link: string;
  image: any;
}

export function ProjectCard(props: ProjectCardProps) {
  const theme = useColors();

  return (
    <Link className={`${styles.projectCard} ${fr.cx('fr-mb-4v')}`} href={props.link} title={`Voir le projet "${props.name}"`} target="_blank">
      <picture className={styles.picture}>
        <Image src={props.image} alt="" />
      </picture>
      <div className={`${styles.content} ${fr.cx('fr-p-8v')}`}>
        <p className={fr.cx('fr-hint-text', 'fr-mb-0')} style={{ color: theme.decisions.text.mention.grey.default }}>
          <span className={fr.cx('fr-mr-1w', 'fr-icon--sm', 'fr-icon-map-pin-2-line')} />
          {props.location}
        </p>
        <h6 className={`${styles.title} ${fr.cx('fr-mt-4v', 'fr-mb-0', 'fr-text--lg')}`}>{props.name}</h6>
        <ul className={fr.cx('fr-tags-group', 'fr-mt-4v', 'fr-mb-0')} style={{ flexGrow: 1 }}>
          {props.categories.map((category) => (
            <li key={category} style={{ lineHeight: '32px' }}>
              <p className={fr.cx('fr-tag', 'fr-tag--sm')}>{category}</p>
            </li>
          ))}
        </ul>
        <p className={fr.cx('fr-link', 'fr-link--icon-right', 'fr-icon-arrow-right-line', 'fr-mt-4v')}>Voir le projet</p>
      </div>
    </Link>
  );
}
