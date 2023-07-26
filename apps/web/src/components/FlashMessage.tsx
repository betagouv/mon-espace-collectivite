import { fr } from '@codegouvfr/react-dsfr';
import Link from 'next/link';

export function FlashMessage() {
  return (
    <div id="environment-information" className={fr.cx('fr-notice', 'fr-notice--info')}>
      <div className={fr.cx('fr-container')}>
        <div className={fr.cx('fr-notice__body')}>
          <p className={fr.cx('fr-notice__title')}>
            Ce service est en phase d’expérimentation.&nbsp;
            <br className={fr.cx('fr-hidden-lg', 'fr-mt-2v')} />
            <Link href="https://tally.so/r/meD1Lx" className={fr.cx('fr-mr-2w')} target="_blank">
              Contactez-nous pour en savoir plus
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlashMessage;
