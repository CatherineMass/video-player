import React, { AriaAttributes, DOMAttributes } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    alt?: string;
  }
}

declare module '*.svg' {
  const content: any;
}
