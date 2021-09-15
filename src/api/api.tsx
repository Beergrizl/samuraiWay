import axios from "axios";

export const instance= axios.create({
    withCredentials: true, headers:{
        "API-KEY": "d3f5a5ec-7ebf-4ca3-ba3f-86a0fe38c919"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI ={ getUsers(currentPage=1, pageSize=10 ) {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`,
       {
          withCredentials:true
       }).then(response=>response.data)
}}