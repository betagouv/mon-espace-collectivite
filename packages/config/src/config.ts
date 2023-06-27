/**
 * Project configuration constants
 * ⚠️ Never put any secret value or authentication token in this file (or in any version controlled file)
 */
export const projectTitle = process.env.NEXT_PUBLIC_APP_NAME || '';
export const projectSlug = process.env.NEXT_PUBLIC_APP_SLUG || '';
export const mainLiveUrl = `https://${projectSlug}.anct.gouv.fr`;
export const repositoryUrl = `https://github.com/betagouv/${projectSlug}`;

export const databaseInstanceName = process.env.DATABASE_INSTANCE_NAME ?? '';
export const containerNamespaceName = process.env.CONTAINER_NAMESPACE_NAME ?? '';
export const region = process.env.SCW_DEFAULT_REGION ?? '';
export const mainRootDomain = process.env.MAIN_ROOT_DOMAIN ?? '';
export const previewRootDomain = process.env.PREVIEW_ROOT_DOMAIN ?? '';
export const mainSubdomain = process.env.MAIN_SUBDOMAIN ?? '';
export const previewSubdomain = process.env.PREVIEW_SUBDOMAIN ?? '';

export const mainDomain = mainSubdomain ? `${mainSubdomain}.${mainRootDomain}` : mainRootDomain;
export const previewDomain = previewSubdomain ? `${previewSubdomain}.${previewRootDomain}` : previewRootDomain;
export const chromaticAppId = process.env.CHROMATIC_APP_ID ?? '';
export const publicContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';
export const publicSentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN ?? '';
export const publicMatomoHost = process.env.NEXT_PUBLIC_MATOMO_HOST ?? '';
export const publicMatomoSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? '';
export const nextTelemetryDisabled = process.env.NEXT_TELEMETRY_DISABLED ?? '';
export const sentryOrg = process.env.SENTRY_ORG ?? '';
export const sentryProject = process.env.SENTRY_PROJECT ?? '';
export const sentryUrl = process.env.SENTRY_URL ?? '';
export const smtpPort = process.env.SMTP_PORT ?? '';
