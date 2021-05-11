

// export default Signin 
 import React, {useContext, useState} from 'react'
 import {Image ,Button} from'react-native'
 import {Input, TextError, TextErrorLogin} from '../../Components/Form'
 import {View,KeyboardView,ViewLogo} from '../../Components/Containers/container'
 import AuthContext from '../../context/AuthContext'
//  import {KeyboardView, View, ViewLogo, Button}from '../../Components/Containers/container'
 import * as Yup from 'yup';
 import { Formik } from 'formik';

  const SignupSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string()
     .min(5, 'A senha deve  conter no minímo 5 caracteres!')
     .required('Required'),

  
 });
 
 export const  Signin  =({ props}) =>{


    const {user, SignIn, signed, errorLogin} = useContext(AuthContext)

    console.log('error para apresentar errorLogin',errorLogin);
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
       <KeyboardView>
        <ViewLogo>
        <Image
        style={{
            width:130,
             height:155,
          }}
          source={require('../../public/logo/logoQuebra.png')}/>
      </ViewLogo>
       <View>
         <Input
           placeholder="E-mail"
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
           {errors.email && touched.email ? (
             <TextError>{errors.email}</TextError>
           ) : null}
        <Input
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          placeholder="Senha"
          />
            {errors.password && touched.password ? (
             <TextError>{errors.password}</TextError>
           ) : null}

            {errorLogin && (<TextErrorLogin>{errorLogin}</TextErrorLogin>)}

         <Button onPress={handleSubmit} title="Submit" />
       </View>
      </KeyboardView>
     )}
   </Formik>
 );
        }
  export default Signin 
