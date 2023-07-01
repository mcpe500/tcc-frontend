module.exports = {
    storeToken: (token) => {
        localStorage.setItem('tcc-auth-token', token);
    },
    getToken: () => {
        return localStorage.getItem('tcc-auth-token');
    }
}

