import axios from 'axios';

const API_URL = 'http://localhost:8080/clients';

class ClientService {
    getClients() {
        return axios.get(API_URL);
    }

    createClient(client) {
        return axios.post(API_URL, client);
    }

    updateClient(id, client) {
        return axios.put(`${API_URL}/${id}`, client);
    }

    deleteClient(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new ClientService();
