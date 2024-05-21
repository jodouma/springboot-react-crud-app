import React, { useState, useEffect } from 'react';
import ClientService from '../ClientService';
import { Link } from 'react-router-dom';

function ClientList() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = () => {
        ClientService.getClients().then(response => {
            setClients(response.data);
        });
    };

    const deleteClient = (id) => {
        ClientService.deleteClient(id).then(() => {
            loadClients();
        });
    };

    return (
        <div className="container">
            <h2 className="text-center">Client List</h2>
            <Link to="/add" className="btn btn-primary mb-2">Add Client</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>
                                <Link to={`/edit/${client.id}`} className="btn btn-info">Edit</Link>
                                <button onClick={() => deleteClient(client.id)} className="btn btn-danger ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientList;
