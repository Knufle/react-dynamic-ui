export interface NavigationLink {
  path: string;
  label: string;
}

export interface Navigation {
  title: string;
  links: NavigationLink[];
}

export interface ComponentStyles {
  [key: string]: string | number;
}

export interface BaseSection {
  type: "component" | "container" | "html";
  styles?: ComponentStyles;
}

export interface ComponentSection extends BaseSection {
  type: "component";
  component: string;
  inputs: Record<string, unknown>;
}

export interface ContainerSection extends BaseSection {
  type: "container" | "html";
  tag: string;
  content?: string;
  children?: Section[];
}

export type Section = ComponentSection | ContainerSection;

export interface Page {
  path: string;
  title: string;
  sections: Section[];
}

export interface UIConfig {
  pages: Page[];
}