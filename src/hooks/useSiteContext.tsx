import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';
import { translations } from '../content/translations';
import type { Language } from '../types/i18n';

type Theme = 'light' | 'dark';

interface SiteContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useLocalStorageState<Language>('language', 'en');
  const [theme, setTheme] = useLocalStorageState<Theme>('theme', 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value: SiteContextType = {
    language,
    setLanguage,
    theme,
    toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSiteContext() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteContext must be used within SiteProvider');
  }
  return context;
}

export function useTranslation() {
  const { language } = useSiteContext();
  return translations[language];
}
