import styles from "./TodoItem.module.css"
import { Trash } from "phosphor-react"
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
                {!isChecked && 
                    <>
                        <div className={styles.checkTodoButton}>
                        <button 
                            type="button"
                            onClick={() => setIsChecked(!isChecked)}
                        />
                        </div>
                        <p>
                            {description}
                        </p>
                    </>
                }

                {isChecked && 
                    <>
                        <div className={styles.checkedTodoButton}>
                        <button 
                            type="button"
                            onClick={() => setIsChecked(!isChecked)}
                        />
                        </div>
                        <p>
                            {description}
                        </p>
                    </>
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