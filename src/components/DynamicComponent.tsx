import { ComponentStyles } from '../types/ui-config';
import { lazy, Suspense } from 'react';

// Lazy load components
const components = {
  HeroComponent: lazy(() => import('./HeroComponent')),
  MatCardComponent: lazy(() => import('./MatCardComponent')),
  NavigationComponent: lazy(() => import('./NavigationComponent')),
} as const;

export type ComponentName = keyof typeof components;

interface DynamicComponentProps<T extends ComponentName> {
  component: T;
  inputs: any; // Note: We're temporarily using 'any' here as type safety is handled at the JSON schema level
  styles?: ComponentStyles;
}

export function DynamicComponent<T extends ComponentName>({ 
  component, 
  inputs, 
  styles 
}: DynamicComponentProps<T>) {
  const Component = components[component];
  
  if (!Component) {
    console.warn(`Component ${component} not found`);
    return null;
  }

  return (
    <Suspense fallback={<div>Loading component...</div>}>
      <Component {...inputs} style={styles} />
    </Suspense>
  );
}