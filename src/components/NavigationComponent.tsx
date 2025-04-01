import { Link } from 'react-router';
import { Navigation } from '../types/ui-config';

interface NavigationComponentProps {
  navigation: Navigation;
  style?: React.CSSProperties;
}

export default function NavigationComponent({ navigation, style }: NavigationComponentProps) {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ margin: 0 }}>{navigation.title}</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {navigation.links.map((link) => (
            <Link 
              key={link.path} 
              to={`/${link.path}`}
              style={{ textDecoration: 'none', color: '#333', padding: '0.5rem' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}