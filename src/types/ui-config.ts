import type { ComponentName } from '../components/DynamicComponent';
import type { CSSProperties } from 'react';

export interface NavigationLink {
  path: string;
  label: string;
}

export interface Navigation {
  title: string;
  links: NavigationLink[];
}

export interface Node {
  node: ComponentName | keyof JSX.IntrinsicElements;
  props: {
    className?: string;
    style?: CSSProperties;
    children?: (Node | string)[] | string;
    [key: string]: unknown;
  };
}

export interface Page {
  path: string;
  title: string;
  sections: Node[];
}

export interface UIConfig {
  pages: Page[];
}