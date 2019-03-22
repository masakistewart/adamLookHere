
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

module.exports = class Spotify {
    constructor(token) {

        token: token || this.fetchToken()
    }

    fetchToken() {
        if(process.env.CLIENTID || CLIENTSECRET) {
            return new Error('MISSING CLIENT ID AND CLIENT SECRET')
        }
        
    }

    request(config, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
});


}