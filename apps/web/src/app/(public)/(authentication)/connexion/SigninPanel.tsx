import { AuthCard } from '@app/web/app/(public)/(authentication)/AuthCard';
import { signinErrorMessage } from '@app/web/app/(public)/(authentication)/authenticationErrorMessage';
import { PublicWebAppConfig } from '@app/web/webAppConfig';

function SigninPanel({ error }: { error?: string }) {
  return (
    <AuthCard>
      <h4>Connexion à {PublicWebAppConfig.projectTitle}</h4>
      {error ? (
        <div className="fr-alert fr-alert--error fr-alert--sm fr-mb-6v">
          <p>{signinErrorMessage(error)}</p>
        </div>
      ) : null}

      <h5>Se connecter avec MonComptePro</h5>
      <div className="fr-connect-group">TODO: MonComptePro button</div>
      <hr className="fr-mt-6v" />
      <h5 className="fr-mt-4v">Vous n&apos;avez pas de compte ? ...</h5>
    </AuthCard>
  );
}

export default SigninPanel;
