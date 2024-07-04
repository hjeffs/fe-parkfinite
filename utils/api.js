import  axios  from 'axios';

const parkfiniteApi = axios.create({
    baseURL: 'https://parkfinite-api.onrender.com' 
})

export const getCampsites = () => {
    return parkfiniteApi
    .get('/campsites')
    .then((res) => {
        console.log (res.data)
        return res.data
    })
}