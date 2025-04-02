import { Routes, Route, Navigate, useLocation } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { UIConfig } from './types/ui-config';
import { getUIConfig } from './services/uiConfigService';
import { DynamicSection } from './components/DynamicSection';

function App() {
  const { data: config, error, isLoading } = useQuery<UIConfig>({
    queryKey: ['ui-config'],
    queryFn: getUIConfig
  });

  const location = useLocation();

  useEffect(() => {
    if (config) {
      const currentPage = config.pages.find(page => '/' + page.path === location.pathname);
      if (currentPage) {
        document.title = currentPage.title;
      }
    }
  }, [config, location.pathname]);

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading || !config) return <div>Loading...</div>;

  return (
    <Routes>
      {config.pages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={
            <div>
              {page.sections.map((section, index) => (
                <DynamicSection key={index} section={section} />
              ))}
            </div>
          }
        />
      ))}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
