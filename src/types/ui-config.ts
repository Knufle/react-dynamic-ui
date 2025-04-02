export interface NavigationLink {
  path: string;
  label: string;
}

export interface Navigation {
  title: string;
  links: NavigationLink[];
}

export interface Node {
  node: string;
  props: {
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