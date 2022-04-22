import axios from 'axios';
import { createServer, Model } from 'miragejs';

const api = axios.create({
  baseURL: '/api',
});

function createFakeApi() {
  createServer({
    models: {
      transaction: Model,
    },

    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => this.schema.all('transaction'));

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', { ...data, createdAt: new Date() });
      });

      this.delete('/transactions/:id', (schema: any, request) => {
        const { id } = request.params;

        return schema.transactions.find(id)?.destroy()
      });
    },
  });
}

export { api, createFakeApi };
