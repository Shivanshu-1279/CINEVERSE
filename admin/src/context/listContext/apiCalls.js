import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        
        // token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"
        
         token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODc1MTY1NSwiZXhwIjoxNjg5MTgzNjU1fQ.IziRbj9tbZnwcUiaI16qHnq3o5FHF0u7Cp64zagGwjc"
          
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

// Creating a new movie

export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {

    //body "movie" is added.
    const res = await axios.post("/lists", list, {
      headers: {
        // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,

        // token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODE0NDE2OCwiZXhwIjoxNjg4NTc2MTY4fQ.O5HvWBMguRGNA9TH_XTCRXCKtWRIUdnTRVk_PK6UbMc"

        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"

      },
    });

    // will return data(as new movie)
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};


//delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
      await axios.delete("/movies/" + id, {
        headers: {
          // token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,

        // token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODE0NDE2OCwiZXhwIjoxNjg4NTc2MTY4fQ.O5HvWBMguRGNA9TH_XTCRXCKtWRIUdnTRVk_PK6UbMc"

        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODhhMmE3OGZkYThiNzA5MGI0ZjA4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMxMTA0NSwiZXhwIjoxNjg4NzQzMDQ1fQ.eEgrhQYNqVF1bvHTxh75eQP7tC0zRONRJm_gb0R2g0I"
        },
      });
      dispatch(deleteListSuccess(id));
    } catch (err) {
      dispatch(deleteListFailure());
    }
  };