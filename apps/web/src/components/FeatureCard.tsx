import { fr } from '@codegouvfr/react-dsfr';
import Image from 'next/image';

export interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export function FeatureCard({ title, description, iconSrc }: FeatureCardProps) {
  return (
    <div className={fr.cx('fr-tile')}>
      <div className={fr.cx('fr-tile__body')}>
        <p className={fr.cx('fr-tile__title')}>{title}</p>
        <p className={fr.cx('fr-tile__desc', 'fr-text--sm')}>{description}</p>
      </div>
      <div className={fr.cx('fr-tile__img')}>
        <Image src={iconSrc} alt="" />
      </div>
    </div>
  );
}
