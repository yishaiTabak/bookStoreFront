import axios from 'axios';

const URL_SERVER = "http://localhost:5000/"

const sendToken = (token) =>{
    return {headers:{
        Authorization: 'Bearer ' + token
    }}
}

const createUser = async (userData) => {
    try{
        const res = await axios.post(URL_SERVER+'users/new', userData)
        return res.data
    }catch(err){
        console.log(err)
        return null
    }
}
export const postUser = async (userData) =>{
    const res = await createUser({...userData, role:"user"})
    return res
}
export const postAdmin = async (userData) =>{
    const res = await createUser({...userData, role:"admin"})
    return res
}

export const login = async (email, password) => {
    try{
        const res = await axios.post(URL_SERVER+'users/login', {
            email,
            password
        })
        console.log(res)
        return res.data
    }catch(err){
        return null
    }
}

export const logout = async (token) => {
    try {
        await axios.post(URL_SERVER + 'users/logout', {}, {headers:{
            Authorization: 'Bearer ' + token
        }})
    }catch (err){
        console.log(err)
    }
}

export const editUser = async (updates,token) =>{
    try{
        const res = await axios.patch(URL_SERVER + 'users/edit', updates, sendToken(token))
        return res.data
    }catch(err){
        console.log(err)
        return null
    }
}

export const deleteUser = async (token) =>{
    try{
        await axios.delete(URL_SERVER+'users/delete',sendToken(token))
        return
    }catch (err){
        console.log(err)
    }
}
