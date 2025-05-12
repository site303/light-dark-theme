import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styles from '../styles/Theme.module.css';

export default function Form() {
    const { theme } = useContext(ThemeContext);
    return(
<div className={`${theme === 'light' ? styles.formLight : styles.formDark} ${styles.formContainer}`}>
    {/* эту запись можно переписать более лаконично без тернарного*/}
   {/* <div className={`${styles[theme]} ${styles.formContainer}`}></div>  */}  
   <h2>Fill the form</h2>
   <form>
    <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className={`${theme === 'light' ? styles.fieldLight : styles.fieldDark } ${styles.input}`} />
    </div>

    <div className={styles.formGroup}>
        <label>Email:</label>
        <input type="email" id="email" placeholder="example@gmail.com" className={`${theme === 'light' ? styles.fieldLight : styles.fieldDark } ${styles.input}`}/>
    </div>
    <div className={styles.formGroup}>
<label htmlFor="date">Дата:</label>
<input type="date" id="date" name="date" className={`${theme === 'light' ? styles.fieldLight : styles.fieldDark } ${styles.input}`}/>
    </div>
    <button type="submit" className={`${theme === 'light' ? styles.buttonLight : styles.buttonDark} ${styles.button}`}>Send</button>
   </form>
</div>
    );
};