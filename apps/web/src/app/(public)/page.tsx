import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';

import Survey from './Survey';

export const revalidate = 0;

const HomePage = () => (
  <>
    <div style={{ backgroundColor: '#F5F5FE', padding: '2rem' }}>
      <div className="fr-container">
        <h1 className={fr.cx('fr-mt-8v')}>Le guichet unique des collectivités</h1>
        <p>Tous les services pour accompagner la transformation de votre collectivité. À un seul endroit.</p>
        <ul>
          <li>+ de X services de l’Etat et de partenaires intégrés</li>
          <li>un descriptif clair de leurs fonctionnalités </li>
          <li>un contact unique pour chacun d’entre eux</li>
        </ul>
        {/* <Input
      label=""
      nativeInputProps={{
        placeholder:
        'Indiquez le nom ou code postal de la commune qui vous intéresse',
      }}
    /> */}
        <Button>Voir les services</Button>
      </div>
    </div>
    <div className="fr-container" style={{ padding: '2rem' }}>
      <h2>A qui s’adresse Mon Espace Collectivité ?</h2>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-lg-4">
          <div style={{ backgroundColor: '#F6F6F6' }}>
            <div style={{ padding: '1rem', margin: '1rem' }}>
              <h4>Élus / Collectivités</h4>
              <ul>
                <li>xxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxx</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#F6F6F6' }}>
            <div style={{ padding: '1rem', margin: '1rem' }}>
              <h4>Préfets</h4>
              <ul>
                <li>xxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxx</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-lg-4">
          <div style={{ backgroundColor: '#F6F6F6' }}>
            <div style={{ padding: '1rem', margin: '1rem' }}>
              <h4>Partenaire</h4>
              <ul>
                <li>xxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxx</li>
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#F6F6F6' }}>
            <div style={{ padding: '1rem', margin: '1rem' }}>
              <h4>Service d’état</h4>
              <ul>
                <li>xxxxxxxxxxxx</li>
                <li>xxxxxxxxxxxx</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{ padding: '2rem', backgroundColor: '#F6F6F6' }}>
      <div className="fr-container" style={{ padding: '2rem' }}>
        <h2>Construisez ce service avec nous !</h2>
        <p>Vous souhaitez nous faire part de vos besoins, de vos idées, des problèmes que vous rencontrez sur le terrain ?</p>
        <p>Répondez à quelques questions pour nous aidez à améliorer le service.</p>
        <Button>Répondre au questionnaire</Button>
      </div>
    </div>
    <div className="fr-container">
      <Survey />
    </div>
    <div className="fr-container" style={{ padding: '2rem' }}>
      <h2>A qui s’adresse Mon Espace Collectivité ?</h2>
      <p>Annuaire des services</p>
      <p>Xxxxx</p>
      <p>Xxxxx</p>
    </div>
  </>
);

export default HomePage;
