const axios = require('axios');
const baseURL = 'https://corona.lmao.ninja/v2';

const fetchData = (route, params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get(`${baseURL}${route}`, { ...params});
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}


const buildDashboardInformation = async ({ country = null}) => {

    const normalizePathParam = param => {
        return param ? `/${country}` : ''
    }
    
    const [ world, countries ] =  await Promise.all([
        fetchData('/all'),
        fetchData('/countries' + normalizePathParam(country) ),
    ])


    return {
        world,
        countries,
    }
}

module.exports = {
    buildDashboardInformation,
}