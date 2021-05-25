

import axios from 'axios'

const Autenticar = async (values)  => {
//const BASE_URL  = 'http://192.168.0.3:8000/api'
const BASE_URL  = 'http://127.0.0.1:8000/api'


    try{
     console.log(values);
        if(values.data.user.token){
            return values;
        }

         return await axios.post(`${BASE_URL}/login`,values)


    }catch(e){
        console.log(e)
    }

    // return new Promise(resolve => {
    //     setTimeout(()=> {
    //         resolve({
    //             token:'tken',
    //             user:{
    //                 nome:'aline',
    //                 email:'aline_prado@hot.com'
    //             }
    //         });

    //         },2000);
    // });
}
export default Autenticar 
