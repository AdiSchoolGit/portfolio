import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from '../Layout.jsx'
import Portfolio from '../Pages/Portfolio.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Portfolio />
    </Layout>
  </React.StrictMode>,
)

