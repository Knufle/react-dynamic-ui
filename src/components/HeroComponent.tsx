interface HeroComponentProps {
  title: string;
  subtitle: string;
  ctaText: string;
  style?: React.CSSProperties;
}

export function HeroComponent({ title, subtitle, ctaText, style }: HeroComponentProps) {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem', ...style }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{subtitle}</p>
      <button style={{ fontSize: '1.2rem', padding: '0.8rem 2rem' }}>{ctaText}</button>
    </div>
  );
}