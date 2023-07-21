import { fr } from '@codegouvfr/react-dsfr';
import Image from 'next/image';

export interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
}

export function FeatureCard(props: FeatureCardProps) {
  return (
    <div className={fr.cx('fr-tile')}>
      <div className={fr.cx('fr-tile__body')}>
        <p className={fr.cx('fr-tile__title')}>{props.title}</p>
        <p className={fr.cx('fr-tile__desc', 'fr-text--sm')}>{props.description}</p>
      </div>
      <div className={fr.cx('fr-tile__img')}>
        <Image src={props.icon} alt="" />
      </div>
    </div>
  );
}
