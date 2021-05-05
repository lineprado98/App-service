import React, {createContext, useEffect} from "react"
import { useState } from "react";
import  Autenticar from '../services/auth'
import AsyncStorageStatic from "@react-native-community/async-storage"
import api from '../services/api'
const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(null)
    const [errorLogin, setErrorLogin] = useState(null);


    useEffect(()=>{
        async function loadStoragegetData(){
        const storagedUser =  await AsyncStorageStatic.getItem('@AuthUser')
        const storagedToken =  await AsyncStorageStatic.getItem('@AuthToken')
       
        if(storagedToken && storagedUser){
            setLoading(false)  // api.defaults.headers['Authorization'] = `Bearer${res.token}`
            setUser(JSON.parse(storagedUser))
          
        }
    }
    loadStoragegetData();
    },[]);

async function SignIn(values){
    setLoading(true)  // api.defaults.headers['Authorization'] = `Bearer${res.token}`
    const res = await Autenticar(values);
 
    if(res.data.status==200){
      let userAuth= res.data.user;
      setUser(res.data.user)
    // passar token para as reqs

      api.defaults.headers['Authorization'] = `Bearer${ userAuth.token}`
      await AsyncStorageStatic.setItem('@AuthUser',JSON.stringify( userAuth.name))
      await AsyncStorageStatic.setItem('@AuthToken', userAuth.token)
     setLoading(false)
     setErrorLogin(null)

    }else{
        console.log('sattus diferente de 200',res);
        setErrorLogin(res.data.message)
         setLoading(false)//tem que mandar parar 
     await  SignOut()
    }

    }
    async function SignOut() {
        console.log( ' SignOut')
         AsyncStorageStatic.clear().then(()=>{
             setUser(null)
    })
}


return(
<AuthContext.Provider
    value = {{
        signed:!!user,
        user,
        SignIn,
        SignOut,
        loading,
        errorLogin
    }}>
        {children}
 </AuthContext.Provider>
)

    }



export default AuthContext