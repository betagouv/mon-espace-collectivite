import { fr } from '@codegouvfr/react-dsfr';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

export interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className={fr.cx('fr-tile')}>
      <div className={fr.cx('fr-tile__body')}>
        <p className={fr.cx('fr-tile__title')}>{title}</p>
        <p className={fr.cx('fr-tile__desc', 'fr-text--sm')}>{description}</p>
      </div>
      <div className={fr.cx('fr-tile__img')}>
        <Image src={icon} alt="" />
      </div>
    </div>
  );
}
