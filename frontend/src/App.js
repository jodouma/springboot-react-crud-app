import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClientList from './components/ClientList';
import AddClient from './components/AddClient';
import EditClient from './components/EditClient';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Client Management</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Add Client</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Routes>
                        <Route exact path="/" element={<ClientList />} />
                        <Route path="/add" element={<AddClient />} />
                        <Route path="/edit/:id" element={<EditClient />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
