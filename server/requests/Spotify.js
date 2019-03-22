const request = require('request');
const searchConfig = { method: 'GET', url: `https://api.spotify.com/v1/search?q=${str}&type=${type.join(',')}` }
const config = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers:
    {
        Authorization: 'Basic ZjhmNDllZmFkMGExNGFlNjhmODFlMWIyOGVkOGZmYzA6MmE2MzBiNGM5ZjMzNDA5NTk2MmI0MDNjNjdkNjI3YmQ=',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: { grant_type: 'client_credentials' }
};

class Spotify {
    constructor() {
        this.token = this.fetchToken();
    }

    fetchToken() {
        return new Promise((resolve, reject) => {
            if (process.env.CLIENTID || process.env.CLIENTSECRET) {
                reject(new Error('MISSING CLIENT ID AND CLIENT SECRET'))
            }

            request(config, (error, _, body) => {
                if (error) reject(new Error(error));
                resolve(body)
            });

        })
    }

    find(str, type) {
        return new Promise((resolve, reject) => {
            request(searchConfig, (err, _, body) => { if (error) reject(new Error(error)); resolve(body)})
        })
    }
}

const instance = new Spotify();
console.log(instance.token)