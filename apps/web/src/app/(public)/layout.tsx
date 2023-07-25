import { PropsWithChildren } from 'react';

import PublicFooter from '@app/web/app/(public)/PublicFooter';
import { getSessionUser } from '@app/web/auth/getSessionUser';
import FlashMessage from '@app/web/components/FlashMessage';
import Header from '@app/web/components/Header';

const PublicLayout = async ({ children }: PropsWithChildren) => {
  const user = await getSessionUser();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Header user={user} />
      <FlashMessage />
      <div style={{ flex: 1 }}>{children}</div>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
