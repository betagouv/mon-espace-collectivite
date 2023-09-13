import { headerFooterDisplayItem } from '@codegouvfr/react-dsfr/Display';
import Footer from '@codegouvfr/react-dsfr/Footer';

function PublicFooter() {
  return (
    <Footer
      accessibility="non compliant"
      brandTop={
        <>
          République
          <br />
          Française
        </>
      }
      contentDescription="Mon Espace Collectivité est un service de l'Incubateur des Territoires, une mission de l'Agence Nationale de la Cohésion des Territoires. Le code source de ce site web est disponible en licence libre. Le design de ce site est conçu avec le système de design de l’État."
      operatorLogo={{
        imgUrl: '/images/logo-anct.svg',
        alt: "Logo de l'Agence Nationale de la Cohésion des Territoires",
        orientation: 'horizontal',
      }}
      homeLinkProps={{
        href: '/',
        title: 'Accueil',
      }}
      bottomItems={[
        {
          text: 'Mentions légales',
          linkProps: { href: '/mentions-legales' },
        },
        {
          text: 'Données personnelles et cookies',
          linkProps: { href: '/donnees-personnelles' },
        },
        headerFooterDisplayItem,
      ]}
    />
  );
}

export default PublicFooter;
