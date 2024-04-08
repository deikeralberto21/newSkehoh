import React from 'react'
import ReactDOM from 'react-dom/client'
import Cursor from './components/cursor/Cursor.jsx'
import './index.css'
import Content from './components/content-main/Content.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rutas from './route.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Router>
        <Rutas></Rutas>
      </Router>
    </>
)
