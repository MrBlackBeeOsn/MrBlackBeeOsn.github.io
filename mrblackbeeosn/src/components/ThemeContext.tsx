// components/ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'whatsapp' | 'telegram' | 'pink' | 'mint' | 'lavender' | 'peach';

interface ThemeContextType {
  currentTheme: Theme;
  changeTheme: (theme: Theme) => void;
  patternColor: string; // Chỉ có patternColor
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('whatsapp');

  const themeColors = {
    whatsapp: '#D9D9D9',
    telegram: '#1E2A38', 
    pink: '#FFB6C1',
    mint: '#20B2AA',
    lavender: '#9C27B0',
    peach: '#FF9A76'
  };

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      changeTheme,
      patternColor: themeColors[currentTheme]
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};