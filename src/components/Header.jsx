import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return(
        <strong className={styles.header}>
            <img src={igniteLogo} alt="logotipo do ignite" />
        </strong>
    );
}