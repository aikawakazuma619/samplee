import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react"

const test_todos = ["勉強", "睡眠"];

const Home = () => {
  const [todo, setTodo] = useState ("");
  const [todos, setTodos] = useState(test_todos);
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }
  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    setTodos([...todos, todo])
    setTodo("");
  }
  const handleOnClick = (id: number) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1)
    setTodos(newTodos)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          konni <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <form onSubmit={handlesubmit}>
          <input onChange={handlechange} type="text" value={todo} required />
          <button type="submit" >追加</button>
        </form>
        {todos.map((todo,id) => (
          <div key={id}>
           <h4>{todo}</h4>
           <button onClick={() => handleOnClick(id)}>削除</button>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

