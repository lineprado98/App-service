import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
//axios.defaults.baseURL = 'http://192.168.0.4:8000/api'

const api = axios.create()


export default api