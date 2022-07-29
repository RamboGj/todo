import styles from "./App.module.css"
import Header from "./components/Header"
import { PlusCircle } from "phosphor-react"
import { useEffect, useState } from "react"
import TodoItem from "./components/TodoItem"
import Image from "./public/Clipboard.svg"

interface TodoProps {
  content: string
}

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [todoDescription, setTodoDescription] = useState<string>('')
  const [createdTodos, setCreatedTodos] = useState<number>(0)
  const [doneTodos, setDoneTodos] = useState<number>(0)

  const descriptionIsEmpty = todoDescription === ''
  const hasTodos = todos.length > 0

  function handleCreateNewTodo() {
    const newTodo = {
      content: todoDescription
    }

    setTodos(state => [...state, newTodo])
    setTodoDescription('')
    setCreatedTodos(createdTodos + 1)
  }

  function deleteTodos(content: string) {
    const listWithoutDeletedTodo = todos.filter((todo) => {
      return todo.content !== content
    })

    setTodos(listWithoutDeletedTodo)
    setCreatedTodos(createdTodos - 1)
  }

  return (
      <div className={styles.wrapper}>
          <Header />
          <div className={styles.searchBarContent}>
            <div className={styles.searchBox}>
              <input 
                value={todoDescription}
                onChange={(e) => setTodoDescription(e.target.value)}
                type="text"
                placeholder="Adicione uma nova tarefa"
                />
            </div>
            <button 
              onClick={handleCreateNewTodo}
              className={styles.searchButton}
              disabled={descriptionIsEmpty}
            >
                Criar
                <PlusCircle size={24} fontWeight="bold"/>
            </button>
          </div>
          <div>
          <div className={styles.todoListwrapper}>
            <div className={styles.listHeader}>
                <p className={styles.created}>
                    Tarefas criadas
                    <span>
                        {createdTodos}
                    </span>
                </p>
                <p className={styles.done}>
                    Concluídas
                    <span>
                      {createdTodos == 0 ? `0` : `${doneTodos} de ${createdTodos}`}
                    </span>
                </p>
            </div>

            {hasTodos && todos.map((item) => {
                return (
                    <TodoItem 
                        deleteTodo={deleteTodos}
                        description={item.content}
                        key={item.content}
                    />
                )
            })}
        
            {!hasTodos &&
                <div className={styles.contentList}>
                   <img 
                       src={Image}
                       alt="" 
                   />
                   <div>
                       <p className={styles.title}>
                           Você ainda não tem tarefas cadastradas
                       </p>
                       <p className={styles.subtitle}>
                           Crie tarefas e organize seus itens a fazer
                       </p>
                   </div>
               </div> 
            }
            
        </div>
          </div>
      </div>
  )
}

export default App
