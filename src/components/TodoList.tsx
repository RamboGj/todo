import styles from "./TodoList.module.css"
import Image from "../public/Clipboard.svg"
import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList() {
    const [isFalse, setIsFalse] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.listHeader}>
                <p className={styles.created}>
                    Tarefas criadas
                    <span>
                        0
                    </span>
                </p>
                <p className={styles.done}>
                    Concluídas
                    <span>
                        0
                    </span>
                </p>
            </div>
            {!isFalse && 
                <>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </>
            }
            {isFalse &&
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
    )
}