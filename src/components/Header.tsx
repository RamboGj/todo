import styles from "./Header.module.css"
import Logo from "../public/Logo.svg"

export default function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={Logo} 
                alt="logo" 
            />
        </header>
    )
}