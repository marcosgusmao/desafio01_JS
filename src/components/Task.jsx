import styles from './Task.module.css';

export function Task() {
  return (
    <section className={styles.task}>
      <header>
        <div>
          <p>tarefas criadas</p>
          <span>10</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>2 de 10</span>
        </div>
      </header>
    </section>
  )
}