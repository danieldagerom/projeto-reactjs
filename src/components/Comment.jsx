import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment(props) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        props.onDeleteComment(props.content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount +  1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/danieldagerom.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Primo</strong>
                            <time title='11 de Maio, às 8:13h' dateTime='2022-05-11 08:13:40'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} title='Aplaudir'>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}