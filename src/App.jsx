import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css'

// author: { avatar_url: "", name: "", role: """}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/danieldagerom.png",
      name: "Daniel Primo",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { tyoe: 'link',  content: 'jane.design/doctorcare' },       
    ],
    publishedAt: new Date('2023-02-22 06:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/lboaventura25.png",
      name: "Lucas Boaventura",
      role: "Tech Lead"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { tyoe: 'link',  content: 'jane.design/doctorcare' },       
    ],
    publishedAt: new Date('2022-01-27 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/roginaldosemog.png",
      name: "Igor Aragão",
      role: "Front End Engineer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { tyoe: 'link',  content: 'jane.design/doctorcare' },       
    ],
    publishedAt: new Date('2022-01-14 07:15:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )  
            })}
          </main>
        </div>
    </div>
  )
}


