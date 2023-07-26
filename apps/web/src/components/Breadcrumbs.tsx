import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { Route } from 'next';
import { LinkProps } from 'next/link';

export type BreadcrumbParent = {
  label: string;
  linkProps: Omit<LinkProps & { href: Route }, 'children'>;
};
export type BreadcrumbParents = BreadcrumbParent[];

export function Breadcrumbs({ currentPage, parents = [] }: { currentPage: string; parents?: BreadcrumbParents }) {
  return (
    <Breadcrumb
      currentPageLabel={currentPage}
      homeLinkProps={{
        href: '/',
      }}
      segments={parents}
    />
  );
}

export default Breadcrumbs;
