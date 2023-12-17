'use client'
import Link from "next/link";
import Blog from "../components/Blog";
import { useEffect, useState } from "react";

async function fetchTodo(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json();
    return data;
}


export default function BlogPage(){
    const [todo,setTodo] = useState('')

    useEffect(() => {
        async function getTodo(){
            setTodo(await fetchTodo())
        }

        getTodo()
    }, [])


    if (!todo) return <h1>Loading</h1>


    return (
        <main>
            <Blog />
            <p>This is my blog in my blog page</p>
            {todo.title}
            <Link href='/about'>
                Go to about page
            </Link>
        </main>
    )
}