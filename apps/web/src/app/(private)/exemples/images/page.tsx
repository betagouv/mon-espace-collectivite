import { getAuthenticatedSessionUser } from '@app/web/auth/getSessionUser';

const TestPage = async () => {
  const user = await getAuthenticatedSessionUser();

  return <h2 className="fr-mt-8v">Hello {user.id}</h2>;
};

export default TestPage;
