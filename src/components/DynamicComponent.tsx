import { lazy, Suspense, createElement } from 'react';

export const components = {
  HeroComponent: lazy(() => import('./HeroComponent')),
  MatCardComponent: lazy(() => import('./MatCardComponent')),
  NavigationComponent: lazy(() => import('./NavigationComponent')),
} as const;

interface DynamicComponentProps {
  component: string;
  props: any;
}

export function DynamicComponent({ component, props }: DynamicComponentProps) {
  if (component in components) {
    const Component = components[component as keyof typeof components];
    return (
      <Suspense fallback={<div>Loading component...</div>}>
        <Component {...props} />
      </Suspense>
    );
  }

  return createElement(component, props);
}