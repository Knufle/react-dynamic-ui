interface HeroComponentProps {
  title: string;
  subtitle: string;
  ctaText: string;
  className?: string;
}

export default function HeroComponent({ title, subtitle, ctaText, ...props }: HeroComponentProps) {
  return (
    <div {...props}>
      <h1 className="text-5xl mb-4">{title}</h1>
      <p className="text-xl mb-8">{subtitle}</p>
      <button className="text-lg px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        {ctaText}
      </button>
    </div>
  );
}