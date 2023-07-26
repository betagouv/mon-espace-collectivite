declare module '*.svg' {
  const content: import('next/image').StaticImageData;

  export default content;
}

declare module '*.html' {
  const content: string;
  export default content;
}
