

// export default Signin 
 import React, {useContext, useState} from 'react'
 import {Image,Text } from'react-native'
 import {Input, TextError, TextErrorLogin} from '../../Components/Form'
import { createStackNavigator} from'@react-navigation/stack'
import Work from '../work'

 import {View,KeyboardView,ViewLogo} from '../../Components/Containers/container'
 import AuthContext from '../../context/AuthContext'
 import * as Yup from 'yup';
 import { Formik } from 'formik';

import { TextInput , Button} from 'react-native-paper';

const Cadastro = createStackNavigator();

  const SignupSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
     .min(5, 'A senha deve  conter no minímo 5 caracteres!')
     .required('Required'),

  
 });
 
 export const  Signin  =({ props, navigation}) =>{



    const {user, SignIn, signed, errorLogin} = useContext(AuthContext)

    function handleSignIn({values}){

        SignIn(values);
    }
  
  return (
  
   <Formik
     initialValues={{ 
     email: '',
     password:'' }}
     validationSchema={SignupSchema}


     onSubmit={values =>handleSignIn({values})  }// o onsubmit pega o handle submit
 
   >
     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
       <KeyboardView  > 
        <ViewLogo>
        <Image
        style={{
            width:130,
             height:155,
          }}
          source={require('../../public/logo/logoQuebra.png')}/>
      </ViewLogo>
       <View >
         <TextInput 
                 style={{ marginTop: 10,
            backgroundColor:'transparent',
            width:'60%'
            }}
          label="Email" variant="outlined"
           onChange={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
           {errors.email && touched.email ? (
             <TextError>{errors.email}</TextError>
           ) : null}
        <TextInput
 
           style={{ marginTop: 10,
           backgroundColor: 'transparent',
           width:'60%'
            }}
                  secureTextEntry

          autoCorrect={false}
          onChange={handleChange('password')}
          onBlur={handleBlur('password')}
          label="Senha" variant="outlined"
           right={<TextInput.Icon name="eye" />}
          />
            {errors.password && touched.password ? (
             <TextError>{errors.password}</TextError>
           ) : null}

            {errorLogin && (<TextErrorLogin>{errorLogin}</TextErrorLogin>)}

        
       </View>
       <View style={{marginTop:80}}>
           <Button mode="contained" title="acessar"   variant="contained" style={{background:'#5e17eb'}} onPress={handleSubmit} >
              {/* <Text color='white'>Entrar</Text> */}
             </Button>
       </View>
       <View style={{marginTop:10}}>
            <Button
                   color='#5e17eb'

            style={{background:'white'}} 
          //  mode="contained"
        onPress={() => navigation.navigate('Cadastro')}
      >CADASTRE-SE</Button>
  
 
       </View>
      
      </KeyboardView>
     )}
   </Formik>
 );
        }
  export default Signin 
