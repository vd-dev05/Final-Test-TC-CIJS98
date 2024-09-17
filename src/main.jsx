// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
    <Router>
        {/* <Route> */}
        <App />
    </Router>

)
