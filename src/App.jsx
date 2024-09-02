import Router from './router/Router';
import { ThemeProvider } from './context/theme';
import { useEffect, useState } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
