const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// routes.get('/', (request, response) => {
//     return response.json({
//         message: 'Hello Omnistack'
//     });
// });

routes.get('/devs', DevController.index);

routes.put('/devs', DevController.update);

routes.post('/devs', DevController.store);

routes.delete('/devs', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;