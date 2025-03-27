import axios from "axios"

const api = axios.create({
    baseURL: 'https://organo-backend-k9xjh4ugb-williamfm64s-projects.vercel.app'
})

export default api