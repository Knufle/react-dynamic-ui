import { UIConfig } from '../types/ui-config';

const API_URL = 'http://localhost:3000';

export const getUIConfig = async (): Promise<UIConfig> => {
  const response = await fetch(`${API_URL}/ui-data`);
  if (!response.ok) {
    throw new Error('Failed to fetch UI configuration');
  }
  return response.json();
};