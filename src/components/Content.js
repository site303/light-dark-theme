import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styles from '../styles/Theme.module.css';

function Content() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
<div className={theme === 'light' ? styles.lightWrapper : styles.darkWrapper}>
    <p>Current theme: {theme}</p>
    <select onChange={toggleTheme}>
        <option>light</option>
        <option>dark</option>
    </select>
</div>
    );
};

export default Content;