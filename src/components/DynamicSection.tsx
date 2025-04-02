import { Node } from '../types/ui-config';
import { DynamicComponent } from './DynamicComponent';

interface DynamicSectionProps {
  section: Node;
}

export function DynamicSection({ section }: DynamicSectionProps) {
  const { node, props } = section;
  const { children, ...otherProps } = props;

  const processChildren = () => {
    if (!children) return undefined;
    
    if (typeof children === 'string') {
      return children;
    }

    if (Array.isArray(children)) {
      return children.map((child, index) => 
        typeof child === 'string' ? 
          child : 
          <DynamicSection key={index} section={child} />
      );
    }

    return undefined;
  };
  
  return (
    <DynamicComponent
      component={node}
      props={{
        ...otherProps,
        children: processChildren()
      }}
    />
  );
}