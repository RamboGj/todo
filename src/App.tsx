import styles from "./App.module.css"
import Header from "./components/Header"
import { PlusCircle } from "phosphor-react"
import TodoList from "./components/TodoList"

function App() {

  return (
      <div className={styles.wrapper}>
          <Header />
          <div className={styles.searchBarContent}>
            <div className={styles.searchInput}>
              <input 
                type="text"
                placeholder="Adicione uma nova tarefa"
                />
            </div>
            <button className={styles.searchButton}>
              Criar
              <PlusCircle size={24} fontWeight="bold"/>
            </button>
          </div>
          <div>
            <TodoList />
          </div>
      </div>
  )
}

export default App
