import { ThemeWrapper, ThemeContext } from './components/ThemeContext';
import Info from './components/Header';
import Form from './components/Form';
import styles from './styles/Theme.module.css';
import { useContext } from 'react';

function ThemedApp() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.wrapper} ${theme === 'light' ? styles.lightWrapper : styles.darkWrapper}`}>
      <Info />
      <Form /> 
    </div>
  );
}
function App() {
  return (
   <ThemeWrapper>
      <ThemedApp />
   </ThemeWrapper>
  );
}

export default App;
