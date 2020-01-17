const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage} = require('../webSockets');

module.exports = {

    async update(request, response){

        const { techs, avatar_url, bio, _id } = request.body;

        const techsArray = parseStringAsArray(techs);
        

        dev = await Dev.updateOne({
            _id: _id
        },
        {
            $set: {techs: techsArray, avatar_url, bio}
        }
        )

        return response.json(dev);
    },

    async destroy (request, response) {
        const { github_username } = request.body;

        let dev = await Dev.findOne({ github_username });

        await dev.delete();

        return response.json(dev);
    },

    async index (request, response) {
        const devs = await Dev.find();

        return response.json(devs)
    },

    async store (request, response){
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev){
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        const { name = login, avatar_url, bio } = apiResponse.data;

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };

        dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        })

        const sendSocketMessageTo = findConnections(
            { latitude, longitude },
            techsArray
        )
        
        sendMessage(sendSocketMessageTo, 'new-dev', dev);

        }

    return response.json(dev);
}
}