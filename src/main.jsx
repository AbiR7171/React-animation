import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TransformOriginRotateSkewScale from './animation/Transform-OriginRotateSkewScale/TransformOriginRotateSkewScale.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransformOriginRotateSkewScale/>
  </React.StrictMode>,
)
