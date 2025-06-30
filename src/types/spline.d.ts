// Type declarations for spline-viewer custom element
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          url: string;
          style?: React.CSSProperties;
          className?: string;
        };
      }
    }
  }
  
  export {};