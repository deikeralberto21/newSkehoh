import React from 'react'
import ReactDOM from 'react-dom/client'
import Cursor from '../components/cursor/Cursor.jsx'
import '../index.css'
import Content from '../components/content-main/Content.jsx'

export default function Home(){
    return(
        <>
            <Cursor />
            <Content />
        </>
    )
}