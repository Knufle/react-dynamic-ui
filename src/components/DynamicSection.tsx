import { Section } from '../types/ui-config';
import { DynamicComponent } from './DynamicComponent';

interface DynamicSectionProps {
  section: Section;
}

export function DynamicSection({ section }: DynamicSectionProps) {
  if (section.type === 'component') {
    return (
      <DynamicComponent
        component={section.component}
        inputs={section.inputs}
        styles={section.styles}
      />
    );
  }

  const Tag = section.tag as keyof JSX.IntrinsicElements;
  return (
    <Tag style={section.styles}>
      {section.content}
      {section.children?.map((child, index) => (
        <DynamicSection key={index} section={child} />
      ))}
    </Tag>
  );
}