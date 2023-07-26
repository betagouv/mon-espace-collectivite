import { PropsWithChildren } from 'react';

export function ConnexionLayout({ children }: PropsWithChildren) {
  return <div className="fr-container">{children}</div>;
}

export default ConnexionLayout;
