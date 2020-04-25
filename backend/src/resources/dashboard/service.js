const axios = require('axios');
const baseURL = 'https://corona.lmao.ninja/v2';

const fetchData = (route, query, pathParam) => {
    
    const normalizePathParam = param => {
        return param ? `/${param}` : '';
    }

    return new Promise(async (resolve, reject) => {
        try {
            const url =  `${baseURL}${route}` + normalizePathParam(pathParam);
            const { data } = await axios.get(url, { ...query });
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}

const getAll = async () => {
    
    const [ world, countries ] =  await Promise.all([
        fetchData('/all'),
        fetchData('/countries'),
    ])

    return {
        world,
        countries,
    }
}

const getCountries = async ({ country = null}) => {
    const countries = await fetchData('/countries', null, country);
    return countries;
}

const getWorld = async () => {
    const countries = await fetchData('/all', null, null);
    return countries;
}

module.exports = {
    getAll,
    getCountries,
    getWorld,
}