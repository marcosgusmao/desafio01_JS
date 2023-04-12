import styles from './Header.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import todoLogo from '../assets/Logo.svg';
import { useState, ChangeEvent, FormEvent } from 'react';

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do Ignite" />

      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input className={styles.taskInput} 
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}
        />
        
        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}