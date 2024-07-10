import axios from "axios";

const parkfiniteApi = axios.create({
  baseURL: "https://parkfinite-api.onrender.com",
});

export const postCampsite = (campsite) => {
  testCamp = {};
  return parkfiniteApi
    .post("/campsites", campsite)
    .then((res) => {
      console.log("Campsite pinned!");
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(
          `Server Error: ${error.response.status} - ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        throw new Error(
          "No response received from the server. Please try again later."
        );
      } else {
        throw new Error(`Error in setting up the request: ${error.message}`);
      }
    });
};

export const getCampsites = () => {
  return parkfiniteApi
    .get("/campsites")
    .then((res) => {
      const allCampsites = res.data.map((campsite) => {
        return object = {
          campsite_id: campsite.campsite_id,
          latitude: campsite.campsite_latitude,
          longitude: campsite.campsite_longitude,
          name: campsite.campsite_name,
          description: campsite.description,
          average_rating: campsite.average_rating,
        };
      });
      return allCampsites;
    })
    .catch((error) => {
      if (error.response) {
        console.error("Response error:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Config:", error.config);
      throw error;
    });
};

export const getCampsiteByID = (campsite_id) => {
  return parkfiniteApi
    .get(`/campsites/${campsite_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getReviewByCampsiteID = (campsite_id) => {
  return parkfiniteApi
    .get(`/campsites/${campsite_id}/reviews`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("Response error:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Config:", error.config);
      throw error;
    });
};

export const getUsers = () => {
  return parkfiniteApi.get("/users").then((res) => {
    const userObject = { username: res.data[4].username, xp: res.data[4].xp };
    return userObject;
  });
};

export const postReview = (campsite_id, commentData) => {
  return parkfiniteApi
    .post(`/campsites/${campsite_id}/reviews`, {
      username: commentData.username,
      comment: commentData.comment,
      rating: commentData.rating,
    })
    .then((res) => {
      console.log("post review successfull");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const patchUserXP = (username, xp) => {
  return parkfiniteApi
  .patch(`/users/${username}/${xp}`)
  .then((res) => {
console.log('XP updated successfully')
  })
  .catch((error) => {
    console.log(error)
  })
}

export const getFavourites = (username) => {
  return parkfiniteApi.get(`/users/${username}/favourites`).then((res) => {
    return res.data
  })
  .catch((error) => {
    console.log(error)
  })
}