import { Post } from './Post';
export function App() {

  return (
    <>
      <Post 
        author="Daniel Primo" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam unde, vero quasi repellendus corrupti aspernatur quis consectetur, eveniet porro saepe animi tempora cupiditate atque alias tempore ea! Dolores, architecto?"
      />
      <Post 
        author="Marcos Paulo"
        content="Melhor morrer do que perder a vida!"
      />
      <Post />
      <Post />
    </>
  )
}


