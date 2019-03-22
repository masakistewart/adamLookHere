const request = require('request');

const credentials = Buffer.from(`${process.env.CLIENTID}:${process.env.CLIENTSECRET}`).toString('base64');
const authStr = `Basic ${credentials}`;

class Spotify {
    constructor() {
        this.fetchTokenConfig = {
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            headers:
            {
                Authorization: authStr,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: { grant_type: 'client_credentials' }
        }

        this.token = this.fetchToken();
    }

fetchToken() {
    return new Promise((resolve, reject) => {
        if (!(process.env.CLIENTID || process.env.CLIENTSECRET)) {
            reject(new Error('MISSING CLIENT ID AND CLIENT SECRET'))
        }

        request(this.fetchTokenConfig, (err, _, body) => {
            if (err) reject(new Error(error));
            console.log(body)
            resolve(body)
        });

    })
}

async find(str, arr) {
    const searchConfig = {
        method: 'GET',
        url: `https://api.spotify.com/v1/search?q=${str}&type=${arr.join(',')}`,
        headers: {
            Authorization: 'Bearer ' + await this.token
        }
    };

    return new Promise((resolve, reject) => {
        request(searchConfig, (err, _, body) => { if (err) reject(new Error(err)); resolve(body) })
    })
}
}

const instance = new Spotify();
instance.find('hello', ['alternative']).then(data => {
    console.log(data)
})