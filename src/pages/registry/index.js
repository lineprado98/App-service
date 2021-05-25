import React,{useState,useContext} from 'react'

import estilo from './style'
import { Text, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input , TextError,TextArea, CurrencyInputStyle} from '../../Components/Form';
 import * as Yup from 'yup';
 import { Formik ,resetForm} from 'formik';
 import api from '../../services/api'
 //import TextInputMasks from 'react-native-text-input-mask';
 import AuthContext from '../../context/AuthContext'

import { TextInput , Button,Switch } from 'react-native-paper';
 import {View,KeyboardView,ViewLogo} from '../../Components/Containers/container'


const Registry = ({navigation}) => {
   const {user, SignIn, signed, errorLogin} = useContext(AuthContext)
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);



  //  Validações
  const RegistrySchema = Yup.object().shape({
    nome: Yup.string().required('Campo Obrigatório'),
    senha: Yup.string()
     .min(10, 'A descrição deve conter no minímo 10 caracters!')
     .required('Campo Obrigatório'),
  
  });
  

  const  submit = async (values, {setSubmitting, setErrors, setStatus, resetForm}) =>{
      try{
        let res = await  api.post('/novo-usuario',values);
        if(res){
          SignIn(res)
          resetForm({})
            
        }
        
      }catch(e){
        
      }
   
  }

  return (
    <Formik initialValues={{ 
     nome:'',
     email:'',
     is_profisionale:false,
     senha:''

    }}

     validationSchema={RegistrySchema}

    onSubmit={submit}>
     

     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
    <KeyboardView>
      <View >


           <TextInput
            style={{ marginTop: 5,
            backgroundColor:'transparent',
            width:'60%'
            }}
          label="Nome" variant="outlined"
           onChangeText={handleChange('nome')}
           onBlur={handleBlur('nome')}
           value={values.nome}
         />
           {errors.nome && touched.nome ? (
             <TextError>{errors.nome}</TextError>
           ) : null}

            <TextInput
            style={{ marginTop: 5,
            backgroundColor:'transparent',
            width:'60%'
            }}
          label="Email" variant="outlined"
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
           {errors.nome && touched.email ? (
             <TextError>{errors.email}</TextError>
           ) : null}

           <TextInput
           secureTextEntry={true}

            style={{ marginTop: 5,
            backgroundColor:'transparent',
            width:'60%'
            }}
           label="Senha" variant="outlined"
           name="senha"
           onChangeText={handleChange('senha')}
           onChangeValue={values.senha}
           onBlur={handleBlur('senha')}
           value={values.senha} />

          
          {errors.senha && touched.senha ? (
             <TextError>{errors.senha}</TextError>
           ) : null}


     <View style={{marginTop:80}}>
       <Text>Tornar-me um profissional</Text>
     <Switch  name="is_profisionale"  onChangeValue={values.is_profisionale} color="#5e17eb" value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>  
       <Button   variant="contained" style={{background:'#5e17eb',marginTop:80,color:'white'}} onPress={handleSubmit} >
           Finalizar </Button>
  
      </View>

    </KeyboardView>  
   
  
     )}
   </Formik>
   )
}
export default  Registry