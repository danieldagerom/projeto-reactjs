import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/danieldagerom.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}></div>
                        <strong>Daniel Primo</strong>
                        <time title='11 de Maio, às 8:13h' dateTime='2022-05-11 08:13:40'>Cerca de 1h atrás</time>
                    </header>
                    <p>Muito bom, rapaz! Parabens! 👏👏</p>
                </div>

                <button title='Deletar comentário'>
                    <Trash size={20} />
                </button>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}