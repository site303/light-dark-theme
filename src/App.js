import { ThemeWrapper, ThemeContext } from './components/ThemeContext';
import Info from './components/Header';
import styles from './styles/Theme.module.css';
import { useContext } from 'react';

function ThemedApp() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.wrapper} ${theme === 'light' ? styles.lightWrapper : styles.darkWrapper}`}>
      <Info />
    </div>
  );
}
function App() {
  return (
   <ThemeWrapper className={`${styles.wrapper} ${styles.theme === 'light' ? styles.lightWrapper : styles.darkWrapper}`}>
      <ThemedApp />
   </ThemeWrapper>
  );
}

export default App;
