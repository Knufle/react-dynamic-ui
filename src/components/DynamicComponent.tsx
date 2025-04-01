import { ComponentStyles } from '../types/ui-config';
import { HeroComponent } from './HeroComponent';
import { MatCardComponent } from './MatCardComponent';
import { NavigationComponent } from './NavigationComponent';

const components = {
  HeroComponent,
  MatCardComponent,
  NavigationComponent,
} as const;

interface DynamicComponentProps {
  component: string;
  inputs: Record<string, unknown>;
  styles?: ComponentStyles;
}

export function DynamicComponent({ component, inputs, styles }: DynamicComponentProps) {
  const Component = components[component as keyof typeof components];

  if (!Component) {
    console.warn(`Component ${component} not found`);
    return null;
  }

  return <Component {...(inputs as any)} style={styles} />;
}