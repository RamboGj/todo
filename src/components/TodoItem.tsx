import styles from "./TodoItem.module.css"
import { Check, Trash } from "phosphor-react"
import { useState } from "react"

interface TodoItemProps {
    description: string
    deleteTodo: (description: string) => void
}

export default function TodoItem({ description, deleteTodo }: TodoItemProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    function handleDeleteTodo() {
        deleteTodo(description)
    }

    return (
        <div className={styles.todoBox}>
            <div className={styles.content}>
                    <div>
                        {!isChecked && 
                            <button className={styles.checkedIcon}>
                                <Check size={24}/>
                            </button>
                        }

                        {isChecked && 
                            <div className={styles.checkTodoButton}>
                                <button 
                                    type="button"
                                >
                                </button>
                            </div>
                        }
                    </div>
                    <p>
                        {description}
                    </p>
            </div>
            <div className={styles.delete}>
                <button 
                    onClick={handleDeleteTodo}
                    type="button">
                        <Trash size={24}/>
                </button> 
            </div>
        </div>
    )
}