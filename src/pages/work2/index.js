import React,{useState} from 'react'

import { useNavigation } from '@react-navigation/native';

 import * as Yup from 'yup';
 import { Formik ,resetForm} from 'formik';
 import api from '../../services/api'
import FlashMessage from "react-native-flash-message";
import { TextInput , Button} from 'react-native-paper';
import {KeyboardView,View,ViewLogo} from '../../Components/Containers/container'
 import { TextInputMask } from 'react-native-masked-text'
import style from '../work2/style';

const Work2= ({navigation}) => {

  const [cpf, setCpf] = useState();
    const items = [{
    id: '92iijs7yta',
    name: 'Educação'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Manutenção'
  }, {
    id: '16hbajsabsd',
    name: 'Beleza'
  }]


  //  Validações
  const SignupSchema = Yup.object().shape({
    titulo: Yup.string().required('Campo Obrigatório'),
    descricao: Yup.string()
     .min(10, 'A descrição deve conter no minímo 10 caracters!')
     .required('Campo Obrigatório'),
  
  });


  const  submit = async (values, {setSubmitting, setErrors, setStatus, resetForm,maskCep}) =>{

    console.log(values);
    try {
        let res = await  api.post('/servico',values);
        console.log(values);
        if(res) {
          resetForm({})
        }
        
      }catch(e){}
   
  }

  return (
     

    <Formik initialValues={{  titulo: '', descricao:'', valor:'', id_categoria:1,id_user:1 }} 
    //validationSchema={SignupSchema}
     onSubmit={submit}>
     
     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
             <KeyboardView>
    <View>
            {/* <TextInputMask style={style.maskedInput}
            placeholder="CPF"
            type={'cpf'}
            value={cpf}
            onChangeText={value=>{ setCpf(value) }}
            /> */}
            
            <TextInputMask style={style.maskedInput}
            placeholder="Valor"
            type={'cpf'}
             
            value={values.valor}
            onChange={value=>{ handleChange('valor',value) }}
            onChangeText={handleChange('valor')}
            />
  

                
         <Button style={{background:'#5e17eb', marginTop:100}} onPress={handleSubmit} color='white' > Anunciar </Button>

    </View>  
   
  </KeyboardView>
     )}
   </Formik>
  

   )
}
export default  Work2