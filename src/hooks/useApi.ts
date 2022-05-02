// import axios from "axios"

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API
// })

export const useApi = () => ({
    validateToken: async (token: string) => {
        return ({
            user: {id: 1, name: 'FulanoDeTal', email: 'FulanoDeTal@gmail.com'},
            token: '123456789'
        });
        // const response = await api.post('/endPoint', {token})
        // return response.data
    },
    singin: async (email: string, password: string) => {
        return ({
            user: {id: 1, name: 'FulanoDeTal', email: 'FulanoDeTal@gmail.com'},
            token: '123456789'
        });
        // const response = await api.post('/endPoint', {email, password});
        // return response.data
    },
    logout: async () => {
        return { status: true }
        // const response = await api.post('/endPoint')
        // return response.data
    }
})