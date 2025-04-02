import { Link } from 'react-router';
import { Navigation } from '../types/ui-config';

interface NavigationComponentProps {
  navigation: Navigation;
  className?: string;
}

export default function NavigationComponent({ navigation, ...props }: NavigationComponentProps) {
  return (
    <nav {...props}>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h2 className="text-xl font-medium">{navigation.title}</h2>
        <div className="flex gap-4">
          {navigation.links.map((link) => (
            <Link 
              key={link.path} 
              to={`/${link.path}`}
              className="text-gray-700 hover:text-gray-900 p-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}