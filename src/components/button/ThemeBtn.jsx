import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '../../context/theme';
import useSound from 'use-sound';
import clickSound from '../../assets/sounds/pop.mp3';

const ThemeBtn = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [play] = useSound(clickSound);

  const onChangeBtn = () => {
    play();
    if (themeMode === 'dark') {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <button
      onClick={onChangeBtn}
      className="ml-4 p-2 border rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle Dark Mode">
      {themeMode === 'dark' ? (
        <FaSun color="yellow" />
      ) : (
        <FaMoon color="gray" />
      )}
    </button>
  );
};

export default ThemeBtn;
