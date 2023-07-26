// app.css must be the first import for webpack css chunks to work properly
// eslint-disable-next-line import/order
// setup.ts must be the first import for webpack css chunks to work properly
// eslint-disable-next-line import/order
import { Display } from '@codegouvfr/react-dsfr/Display/Display';
import { setLink } from '@codegouvfr/react-dsfr/link';
import { DsfrHead } from '@codegouvfr/react-dsfr/next-appdir/DsfrHead';
import { DsfrProvider } from '@codegouvfr/react-dsfr/next-appdir/DsfrProvider';
import { getHtmlAttributes } from '@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes';
import { Metadata } from 'next';
import Link from 'next/link';

import { Matomo } from '@app/web/app/Matomo';
import { StartDsfr } from '@app/web/app/StartDsfr';
import { defaultColorScheme } from '@app/web/app/defaultColorScheme';
import '@app/web/app/setup';
import { PublicWebAppConfig } from '@app/web/webAppConfig';

declare module '@codegouvfr/react-dsfr/link' {
  interface RegisterLink {
    Link: typeof Link;
  }
}

setLink({
  Link,
});

export const metadata: Metadata = {
  title: PublicWebAppConfig.projectTitle,
  themeColor: '#000091',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon/favicon.svg',
      type: 'image/svg+xml',
    },
  },
  description: PublicWebAppConfig.projectTitle,
  manifest: '/favicon/manifest.webmanifest',
};

export function RootLayout({ children }: { children: JSX.Element }) {
  const lang = 'fr';
  const nonce = undefined;

  return (
    <html lang={lang} {...getHtmlAttributes({ defaultColorScheme, lang })}>
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            // "Marianne-Light",
            // "Marianne-Light_Italic",
            'Marianne-Regular',
            // "Marianne-Regular_Italic",
            'Marianne-Medium',
            // "Marianne-Medium_Italic",
            'Marianne-Bold',
            // "Marianne-Bold_Italic",
            // "Spectral-Regular",
            // "Spectral-ExtraBold"
          ]}
        />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          {children}
          <Display />
        </DsfrProvider>
        <Matomo nonce={nonce} />
      </body>
    </html>
  );
}

export default RootLayout;
