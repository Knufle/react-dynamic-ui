import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { UIConfig } from './types/ui-config';
import { getUIConfig } from './services/uiConfigService';
import { DynamicSection } from './components/DynamicSection';

function App() {
  const [config, setConfig] = useState<UIConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUIConfig()
      .then(setConfig)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!config) return <div>Loading...</div>;

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
