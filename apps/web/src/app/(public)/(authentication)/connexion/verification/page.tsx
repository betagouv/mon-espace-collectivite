import { Verify } from '@app/web/app/(public)/(authentication)/connexion/verification/Verify';
import { getSessionUser } from '@app/web/auth/getSessionUser';
import Breadcrumbs from '@app/web/components/Breadcrumbs';
import { getServerUrl } from '@app/web/utils/baseUrl';
import { redirect } from 'next/navigation';

export const revalidate = 0;
const VerifyPage = async () => {
  const user = await getSessionUser();
  if (user) {
    redirect(getServerUrl('/'));
  }

  return (
    <>
      <Breadcrumbs currentPage="Vérification" parents={[{ label: 'Connexion', linkProps: { href: '/connexion' } }]} />
      <Verify />
    </>
  );
};

export default VerifyPage;
