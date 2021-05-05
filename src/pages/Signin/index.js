// import React, {useContext} from 'react'
// import {Image ,TextInput} from'react-native'
// import AuthContext from '../../context/AuthContext'
// import {Input}from '../../Components/Form'
//  import {KeyboardView, View, ViewLogo, Button}from '../../Components/Containers/container'
// import {ErrorMessage, Formik, Form as FormikForm, Field} from 'formik'

// // const validations = yup.object().shape({
// //       // email:yup.string().email().required(),
// //       // password:yup.string().min(8).required()
// //     });

// const Signin = ({handleSubmit, initialValues}) => {
//     const {user, SignIn, signed} = useContext(AuthContext)

    
    // function handleSignIn(){
    //     SignIn()

    // }
//     return (
//     <KeyboardView >
  
//         <ViewLogo>
//           <Image
//             style={{
//               width:130,
//               height:155,
//             }}
//            source={require('../../public/logo/logoQuebra.png')}/>
//         </ViewLogo>
    
//     <View>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={}>
//           <FormikForm>

//           </FormikForm>
//       </Formik>

//     </View>
//       <Button color = "#5e17eb" title="Acessar"  onPress={handleSignIn} /> 

//       </KeyboardView>

  
//   //   <KeyboardView >
//   //       <ViewLogo>
//   //         <Image
//   //           style={{
//   //             width:130,
//   //             height:155,
//   //           }}
//   //          source={require('../../public/logo/logoQuebra.png')}/>
//   //       </ViewLogo>
    
//   //   <View>
//   //     <Input
//   //     autoCorrect={false}
//   //     placeholder="E-mail"
//   //     />
      // <Input
      // secureTextEntry={true}
      // autoCorrect={false}
      // placeholder="Senha"
      // />
    

//   //   </View>
//   // <Button
   
//   //     color = "#5e17eb" 
//   //     title="Acessar"  onPress={handleSignIn} /> 
//   //  </KeyboardView>
   
//     )
//   }

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
