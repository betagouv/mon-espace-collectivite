import Script from 'next/script';

// The Next <Script> tag expect a nonce as Next directly inject the code from the script file in an inline <script> tag
export function Dsfr({ nonce }: { nonce?: string }) {
  return <Script nonce={nonce} src="/dsfr/dsfr.module.min.js" strategy="lazyOnload" />;
}
