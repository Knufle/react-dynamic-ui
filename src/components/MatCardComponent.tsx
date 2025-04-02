interface MatCardComponentProps {
  title: string;
  subtitle?: string;
  actions?: string[];
  image?: string;
  imageAlt?: string;
  className?: string;
  children: React.ReactNode;
}

export default function MatCardComponent({ 
  title, 
  subtitle,
  children,
  actions = [], 
  image, 
  imageAlt,
  ...props
}: MatCardComponentProps) {
  return (
    <div {...props}>
      {image && (
        <img 
          src={image} 
          alt={imageAlt || title}
          className="w-full h-50 object-cover rounded mb-4" 
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {subtitle && (
        <h4 className="text-gray-600 mb-4">{subtitle}</h4>
      )}
      <p className="mb-6">{children}</p>
      {actions.length > 0 && (
        <div className="flex gap-2">
          {actions.map((action, index) => (
            <button 
              key={index}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}