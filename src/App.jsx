import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
              author="Daniel Primo" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam unde, vero quasi repellendus corrupti aspernatur quis consectetur, eveniet porro saepe animi tempora cupiditate atque alias tempore ea! Dolores, architecto?"
            />
            <Post 
              author="Marcos Paulo"
              content="Melhor morrer do que perder a vida!"
            />
          </main>
        </div>
    </div>
  )
}


