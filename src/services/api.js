import axios from 'axios'


const api = axios.create({
   baseUrl:'http://localhost:8000/api',

})
console.log('api',api);


export default api