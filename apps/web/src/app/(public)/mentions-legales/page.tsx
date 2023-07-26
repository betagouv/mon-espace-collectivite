import { fr } from '@codegouvfr/react-dsfr';

import statementContent from '@app/web/app/(public)/mentions-legales/content.transformed.html';

function createMarkup() {
  return { __html: statementContent };
}

export const revalidate = 0;

export function LegalNoticePage() {
  return (
    <div className={fr.cx('fr-container', 'fr-py-6w')}>
      <div className={fr.cx('fr-grid-row', 'fr-grid-row--center')}>
        <div className={fr.cx('fr-col')}>
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
      </div>
    </div>
  );
}

export default LegalNoticePage;
