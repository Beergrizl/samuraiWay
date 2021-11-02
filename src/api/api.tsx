import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "d3f5a5ec-7ebf-4ca3-ba3f-86a0fe38c919"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId:number) {
       return instance.delete(`/follow/${userId}`)
    },
    follow(userId:number) {
       return instance.post(`/follow/${userId}` )
    },
    getProfile(userId: number){
        console.warn('Please use ProfileAPI object')
        return profileAPI.getProfile(userId)
    },
}
export const profileAPI ={
    getProfile(userId: number){
        return instance.get(`/profile/` + userId)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string){
        return instance.put(`profile/status/`, {status: status})
    }
}


export const authAPI = {

    me(){
  return instance.get(`auth/me`)
},
    login(email: string, password: string, rememberMe=false){
        return instance.post(`auth/login`, {email, password, rememberMe})
},
    logout(){
        return instance.delete(`auth/login`)}}