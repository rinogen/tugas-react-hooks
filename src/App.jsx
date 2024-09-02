import Router from './router/Router';
import { ThemeProvider } from './context/theme';
import { useEffect, useState } from 'react';

function App() {
  const storedTheme = localStorage.getItem('themeMode');
  const [themeMode, setThemeMode] = useState(storedTheme || 'light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    //menyimpan tema yang dipilih ke local storage
    localStorage.setItem('themeMode', themeMode);

    //menerapkan ke elemen html
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
