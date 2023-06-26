'use client';

import Script from 'next/script';

const Survey = () => (
  <>
    <iframe
      data-tally-src="https://tally.so/embed/nPDGEx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="200"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Construisez ce service avec nous !"
    ></iframe>

    <Script
      id="tally-js"
      src="https://tally.so/widgets/embed.js"
      onLoad={() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        Tally.loadEmbeds();
      }}
    />
  </>
);

export default Survey;
