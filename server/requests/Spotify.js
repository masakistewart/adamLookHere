const request = require('request');
const fs = require('fs');
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
                resolve(JSON.parse(body))
            });

        })
    }

    async find(str, arr) {
        const token = await this.token;
            const searchConfig = {
                method: 'GET',
                url: `https://api.spotify.com/v1/search?q=${str}&type=${arr.join(',')}&limit=1`,
                headers: {
                    Authorization: 'Bearer ' + token["access_token"]
                }
            };
            return new Promise((resolve, reject) => {
                request(searchConfig, (err, _, body) => {
                    if (err) reject(new Error(err));
                    resolve(body);
                });
            })
    }
}

// const instance = new Spotify();
// instance.find('hello', ['track'])
// .then(data => JSON.parse(data))
// .then(data => {
//     const payload = new Object();
//     const track = data.tracks.items[0];
//     for(let key in track) {
//         payload[key] = track[key].constructor.toString()
//     }
//     console.log(payload)
//     fs.writeFile('trackResponse.js', JSON.stringify(payload), (err) => {
//         if(err) throw err;

//     });
// })