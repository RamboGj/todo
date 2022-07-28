import styles from "./TodoItem.module.css"
import { Trash } from "phosphor-react"

export default function TodoItem() {
    return (
        <div className={styles.todoBox}>
            <div className={styles.content}>
                <input type="checkbox"/>
                <p>
                    nome da todo nome da todonome da todonome da todonome da todonome da todonome da todonome da todonome da todonome da todonome da todo
                </p>
            </div>
            <div className={styles.delete}>
                <button type="button">
                    <Trash size={24}/>
                </button> 
            </div>
        </div>
    )
}