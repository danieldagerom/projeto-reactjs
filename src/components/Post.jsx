import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/danieldagerom.png" />
                    <div className={styles.authorInfo}>
                        <strong>Daniel Primo</strong>
                        <span>Web Developer</span>
                    </div>
                    
                </div>
                
                <time title='11 de Maio, as 8:13h' dateTime='2022-05-11 08:13:40'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {' '}<a href="">jane.design/doctorcare</a></p>
                <p> 
                    <a>#novoprojeto </a>{' '}
                    <a>#nlw </a>{' '}
                    <a>#rocketseat</a>
                </p>
            </div>
        </article>
    )
}