interface MatCardComponentProps {
  title: string;
  subtitle?: string;
  content: string;
  actions?: string[];
  image?: string;
  imageAlt?: string;
  style?: React.CSSProperties;
}

export default function MatCardComponent({ 
  title, 
  subtitle, 
  content, 
  actions = [], 
  image, 
  imageAlt,
  style 
}: MatCardComponentProps) {
  return (
    <div style={{ 
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '1.5rem',
      backgroundColor: '#fff',
      ...style
    }}>
      {image && (
        <img 
          src={image} 
          alt={imageAlt || title}
          style={{ 
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '4px',
            marginBottom: '1rem'
          }} 
        />
      )}
      <h3 style={{ margin: '0 0 0.5rem' }}>{title}</h3>
      {subtitle && (
        <h4 style={{ margin: '0 0 1rem', color: '#666' }}>{subtitle}</h4>
      )}
      <p style={{ margin: '0 0 1.5rem' }}>{content}</p>
      {actions.length > 0 && (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {actions.map((action, index) => (
            <button 
              key={index}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
            >
              {action}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}