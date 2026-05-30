import aixos from 'axios';

 const api = aixos.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
});

export default api;