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
        throw error
    })   
}

// export const getCampsite = async() => {

//     try{
//         const response = await parkfiniteApi.get('/campsites')
//       //  console.log(response.data)
//       console.log(typeof response.data)
// return response.data 
// } catch (error) {console.log(error)}
// }