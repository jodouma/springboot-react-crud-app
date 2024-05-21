import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientService from '../ClientService';

function AddClient() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const saveClient = (e) => {
        e.preventDefault();

        const client = { name, email };

        ClientService.createClient(client).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="container">
            <h2 className="text-center">Add Client</h2>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="btn btn-success" onClick={saveClient}>Save</button>
            </form>
        </div>
    );
}

export default AddClient;
