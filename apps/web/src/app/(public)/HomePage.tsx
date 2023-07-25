import { fr } from '@codegouvfr/react-dsfr';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useColors } from '@codegouvfr/react-dsfr/useColors';
import applicationWrongType from '@gouvfr/dsfr/dist/artwork/pictograms/digital/application.svg';
import locationFranceWrongType from '@gouvfr/dsfr/dist/artwork/pictograms/map/location-france.svg';
import mapWrongType from '@gouvfr/dsfr/dist/artwork/pictograms/map/map.svg';
import informationWrongType from '@gouvfr/dsfr/dist/artwork/pictograms/system/information.svg';
import type { StaticImageData } from 'next/image';

import project1Image from '@app/web/assets/projects/1.jpg';
import project2Image from '@app/web/assets/projects/2.png';
import project3Image from '@app/web/assets/projects/3.png';
import { FeatureCard } from '@app/web/components/FeatureCard';
import { ProjectCard } from '@app/web/components/ProjectCard';

// [WORKAROUND] I didn't figure out to configure eslint to take in account `types.d.ts` whereas in works in the IDE... TS linting through eslint is a bad idea...
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const application: StaticImageData = applicationWrongType;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const locationFrance: StaticImageData = locationFranceWrongType;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const map: StaticImageData = mapWrongType;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const information: StaticImageData = informationWrongType;

export const revalidate = 0;

export function HomePage() {
  const theme = useColors();

  return (
    <>
      <div
        style={{
          backgroundColor: theme.decisions.background.alt.blueFrance.default,
        }}
      >
        <div
          className={fr.cx('fr-container', 'fr-py-6w')}
          style={{
            position: 'relative',
          }}
        >
          <div
            className={fr.cx('fr-unhidden-lg')}
            style={{
              display: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.1,
              backgroundImage: `url(${locationFrance.src})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right center',
              zIndex: 0,
            }}
          />
          <div
            className={fr.cx('fr-grid-row')}
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div className={fr.cx('fr-col-12', 'fr-col-lg-8', 'fr-col-offset-lg-1')}>
              <h1>La plateforme d’accompagnement sur mesure pour vos projets</h1>
              <p>
                Mon Espace Collectivité permet d’accélérer vos projets du quotidien et ceux du Contrat de relance et de transition écologique (CRTE)
                en les orientant le plus en amont possible vers le bon service.
              </p>
              <Button
                linkProps={{
                  href: 'https://tally.so/r/wzNlya',
                }}
              >
                Être accompagné
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={fr.cx('fr-container', 'fr-py-6w')}>
        <div className={fr.cx('fr-grid-row', 'fr-grid-row--center')}>
          <div className={fr.cx('fr-col-12', 'fr-col-lg-10')}>
            <div className={fr.cx('fr-grid-row')}>
              <div className={fr.cx('fr-col')}>
                <h2>Un service simple et concret pour les collectivités</h2>
              </div>
            </div>
            <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
              <div className={fr.cx('fr-col-12', 'fr-col-sm-4')}>
                <FeatureCard
                  title="1. Décrivez votre besoin"
                  description="Quelques informations clés pour être orienté vers le bon service / interlocuteur"
                  iconSrc={information.src}
                />
              </div>
              <div className={fr.cx('fr-col-12', 'fr-col-sm-4')}>
                <FeatureCard
                  title="2. Suivez votre demande"
                  description="Retrouvez les demandes de votre territoire, échanger et collaborer avec l’Etat"
                  iconSrc={application.src}
                />
              </div>
              <div className={fr.cx('fr-col-12', 'fr-col-sm-4')}>
                <FeatureCard
                  title="3. Laissez-vous guider"
                  description="Un délégué territorial, l’ANCT ou un partenaire vous contacte pour les prochaines étapes"
                  iconSrc={map.src}
                />
              </div>
            </div>
            <div className={fr.cx('fr-grid-row', 'fr-pt-6w')}>
              <div className={fr.cx('fr-col')}>
                <h2>Inspirez-vous des solutions des territoires</h2>
                <div className={fr.cx('fr-grid-row', 'fr-grid-row--gutters')}>
                  <div className={fr.cx('fr-col-12')}>
                    <ProjectCard
                      name="« La Traverse », projet d’habitat social et écologique intergénérationnelle à Créon"
                      location="Créon (33)"
                      categories={['Transition écologique', 'Logement et cadre de vie']}
                      link="https://solutionsdelus.gouv.fr/projets/la-traverse-projet-dhabitat-social-et-ecologique-intergenerationnelle-creon"
                      imageSrc={project1Image.src}
                    />
                  </div>
                  <div className={fr.cx('fr-col-12')}>
                    <ProjectCard
                      name="Faciliter la mobilité durable dans le projet de territoire"
                      location="CC du Grand Pic Saint-Loup (34)"
                      link="https://solutionsdelus.gouv.fr/projets/faciliter-la-mobilite-durable-dans-le-projet-de-territoire"
                      categories={['Transport et mobilités']}
                      imageSrc={project2Image.src}
                    />
                  </div>
                  <div className={fr.cx('fr-col-12')}>
                    <ProjectCard
                      name="Le numérique au coeur du projet social : le CCAS d'Amiens"
                      location="Amiens (80)"
                      link="https://solutionsdelus.gouv.fr/projets/le-numerique-au-coeur-du-projet-social-le-ccas-damiens"
                      categories={['Accès au numérique']}
                      imageSrc={project3Image.src}
                    />
                  </div>
                </div>
                <Button
                  linkProps={{
                    href: 'https://solutionsdelus.gouv.fr/projets',
                  }}
                  priority="secondary"
                >
                  Découvrir des projets près de chez vous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: theme.decisions.background.alt.grey.default,
        }}
      >
        <div className={fr.cx('fr-container', 'fr-py-6w')}>
          <div className={fr.cx('fr-grid-row', 'fr-grid-row--center')}>
            <div className={fr.cx('fr-col-12', 'fr-col-lg-10')}>
              <h2>Une question, un avis ? Contactez-nous</h2>
              <p>
                Si vous souhaitez contacter l’équipe Mon Espace Collectivité pour une question, un problème ou simplement donnez votre avis dans le
                but d’améliorer le service, n’hésitez pas à nous écrire via le formulaire ci-dessous.
              </p>
              <Button
                linkProps={{
                  href: 'https://tally.so/r/meD1Lx',
                }}
              >
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
