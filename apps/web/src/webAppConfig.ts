const { mainLiveUrl, projectTitle, repositoryUrl } = {
  mainLiveUrl: 'mainLiveUrl',
  projectTitle: 'Mon Espace Collectivité',
  repositoryUrl: 'repositoryUrl',
};

const NodeEnvironment = process.env.NODE_ENV;

/**
 * Necessary environment variables for web app are listed here.
 */

/**
 * Only use ServerWebAppConfig on server side
 * It contains secrets that must not be sent to the client
 */

const emailServer = `smtp://${process.env.SMTP_USERNAME ?? ''}:${process.env.SMTP_PASSWORD ?? ''}@${process.env.SMTP_SERVER ?? ''}:${
  process.env.SMTP_PORT ?? ''
}`;

export const ServerWebAppConfig = {
  NodeEnv: NodeEnvironment,
  Branch: process.env.BRANCH ?? '',
  Namespace: process.env.NAMESPACE ?? '',
  isMain: process.env.BRANCH === 'main',
  Chromatic: {
    appId: process.env.CHROMATIC_APP_ID ?? '',
  },
  Auth: {
    Email: {
      server: emailServer,
      from: `${process.env.EMAIL_FROM_NAME ?? ''} <${process.env.EMAIL_FROM_ADDRESS ?? ''}>`,
    },
  },
};

/**
 * Public config can be used on client side or server side
 */

export const PublicWebAppConfig = {
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  projectTitle,
  mainLiveUrl,
  repository: repositoryUrl,
  Sentry: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN ?? '',
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ?? 'local',
  },
  Matomo: {
    host: process.env.NEXT_PUBLIC_MATOMO_HOST ?? '',
    siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? '',
  },
};
