import styles from "./TodoItem.module.css"
import { Check, Trash } from "phosphor-react"
import { useState } from "react"

interface TodoItemProps {
    description: string
    deleteTodo: (description: string) => void
    checkTodo: (isChecked: boolean) => void
}

export default function TodoItem({ description, deleteTodo, checkTodo }: TodoItemProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    function handleDeleteTodo() {
        deleteTodo(description)
    }

    function handleCheckTodo() {
        checkTodo(isChecked)
        setIsChecked(!isChecked)
    }

    return (
        <div className={styles.todoBox}>
            <div className={styles.content}>
                    <div>
                        <div
                            className={styles.checkButtonDiv}
                            onClick={handleCheckTodo}
                        >
                            {!isChecked && 
                                <button 
                                    className={styles.checkTodoButton}
                                    type="button"
                                >
                                </button>
                            }
                            {isChecked && 
                                <button
                                    onClick={() => setIsChecked(false)} 
                                    className={styles.checkedIcon}>
                                        <Check size={24}/>
                                </button>
                            }
                        </div>
                    </div>
                    {!isChecked && 
                        <p 
                            className={styles.descriptionTodoNotDone}>
                                {description}
                        </p>
                    }
                    {isChecked && 
                        <p 
                            className={styles.descriptionTodoDone}>
                                {description}
                        </p>
                    }
                    
                    
                   
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