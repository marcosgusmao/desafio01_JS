import styles from './Header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import todoLogo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do Ignite" />

      <form className={styles.taskForm}>
        <input className={styles.taskInput} 
          placeholder='Adicione uma nova tarefa'
        />
        
        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}