import  axios  from 'axios';

const parkfiniteApi = axios.create({
    baseURL: 'https://parkfinite-api.onrender.com' 
})

export const getCampsites = () => {
    return parkfiniteApi
    .get('/campsites')
    .then((res) => {
         const allCampsites = res.data.map((campsite) => {
         const object = {campsite_id: campsite.campsite_id, latitude: campsite.campsite_latitude, longitude: campsite.campsite_longitude, name: campsite.campsite_name, description: campsite.description}
         return object
     })
    
    return allCampsites
    })
    .catch((error) => {
        if (error.response) {
            console.error('Response error:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            
            console.error('Request error:', error.request);
          } else {
            
            console.error('Error message:', error.message);
          }
          console.error('Config:', error.config);
          throw error; 
        });
}

export const getCampsiteByID = (campsite_id) => {
    
    return parkfiniteApi
    .get(`/campsites/${campsite_id}`)
    .then((res) => {
        return res.data
    })
    .catch((error) => {
        throw error; 
      });
}