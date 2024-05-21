import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientService from '../ClientService';

function EditClient() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        ClientService.getClients().then(response => {
            const client = response.data.find(c => c.id === parseInt(id));
            setName(client.name);
            setEmail(client.email);
        });
    }, [id]);

    const updateClient = (e) => {
        e.preventDefault();

        const client = { id, name, email };

        ClientService.updateClient(id, client).then(() => {
            navigate('/');
        });
    };

    return (
        <div className="container">
            <h2 className="text-center">Edit Client</h2>
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
                <button className="btn btn-success" onClick={updateClient}>Update</button>
            </form>
        </div>
    );
}

export default EditClient;
