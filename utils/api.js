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

export const getReviewByCampsiteID = (campsite_id) => {
  return parkfiniteApi
  .get(`/campsites/${campsite_id}/reviews`)
  .then((res) => {
   return res.data
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

export const getUsers = () => {
  return parkfiniteApi
  .get('/users')
  .then((res) => {
    const userObject = {username: res.data[4].username, xp: res.data[4].xp }
    return userObject
  })
}

export const postReview = (campsite_id, commentData) => {
  return parkfiniteApi
  .post(`/campsites/${campsite_id}/reviews`, {username: commentData.username, comment: commentData.comment, rating: commentData.rating})
  .then((res) => {
    console.log("post review successfull")
  })
  .catch((error) => {
    console.log(error)
  })
}

// export const patchUserXP = (username, xp) => {
//   return parkfiniteApi
//   .patch(`/users/${username}/${xp}`)
//   .then((res) => {
// console.log('XP updated successfully')
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }