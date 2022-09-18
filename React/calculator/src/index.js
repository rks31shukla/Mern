import React from 'react'
import ReactDOM from 'react-dom/client'
import Display from './components/Display.js'
import Input from './components/Input.js'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <div class="container">
    <Display />
    <Input />
    </div>
    </>
)