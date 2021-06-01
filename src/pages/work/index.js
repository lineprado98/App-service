import React,{useState} from 'react'

import style from './style'
import { Text, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input , TextError,TextArea, CurrencyInputStyle} from '../../Components/Form';
import  DropDown  from  'react-native-paper-dropdown';

import * as Yup from 'yup';
import { Formik ,resetForm} from 'formik';
import api from '../../services/api'
import FlashMessage from "react-native-flash-message";

import { TextInput , Button, Provider} from 'react-native-paper';
import {View,KeyboardView,ViewLogo} from '../../Components/Containers/container'
import { TextInputMask } from 'react-native-masked-text'
import { color } from 'react-native-reanimated';

const Work= ({navigation}) => {

    const items = [
    {
    value: '1',
    label: 'TI'
    },
    {
    value: '2',
    label: 'Educação'
    },
    {
    value: '3',
    label: 'Beleza'
  }]

  const [categoria, setCategoria] = useState(null);

  //  Validações
  const SignupSchema = Yup.object().shape({

    titulo: Yup.string().required('Campo Obrigatório'),
    descricao: Yup.string().min(10, 'A descrição deve conter no minímo 10 caracters!').required('Campo Obrigatório'),
    valor: Yup.string().required(),
    id_categoria:Yup.string().required()

  });

  const [showDropDown, setShowDropDown] = useState(false);
  

  
  const  submit = async (values, {setSubmitting, setErrors, setStatus, resetForm,maskCep}) =>{


      try {
        console.log(values);
        let res = await  api.post('/servico',values);
        if(res) {
          resetForm({titulo: '', descricao:'', valor:'',id_user:1,telefone:'', id_categoria:{} })
        }
        
      } catch(e) {
        console.log('error',e);
      }
   
  }

  return (
    <Formik initialValues={{  titulo: '', descricao:'', valor:'',id_user:1,telefone:'', id_categoria:null }}  validationSchema={SignupSchema}  onSubmit={submit}>
     
     {({ handleChange, handleBlur, handleSubmit, values, errors, touched , handleFocus}) => (
       
    <KeyboardView>
     
      <View >
          <SafeAreaView style={style.containerStyle}  >
            <DropDown
              label='Categoria'
              value={values.id_categoria}
              mode='flat'
              // setValue={ (text)=>{setCategoria(text)}}
              setValue={handleChange('id_categoria')}
              onBlur={handleBlur('id_categoria')}
              list={items}
              visible={showDropDown}
              showDropDown={() =>  setShowDropDown(true)}
              onDismiss={() =>  setShowDropDown(false)}
              inputProps={{
                style:{backgroundColor:'transparent'},
                right:  <TextInput.Icon  name={'menu-down'}  />,

              }}

            />
          </SafeAreaView >
         {errors.categoria && touched.categoria ? ( <TextError>{errors.categoria}</TextError> ) : null}


          <TextInput
           style={style.inputText}
           label="Título" variant="outlined"
           onChangeText={handleChange('titulo')}
           onBlur={handleBlur('titulo')}
           value={values.titulo}
          />
           {errors.titulo && touched.titulo ? ( <TextError>{errors.titulo}</TextError> ) : null}


          <TextInput
           style={style.inputText}
           label="Descrição" variant="outlined"
           multiline={true}
           onChangeText={handleChange('descricao')}
           onBlur={handleBlur('descricao')}
           value={values.descricao}
          />
          {errors.descricao && touched.descricao ? ( <TextError>{errors.descricao}</TextError> ) : null}

   
          <TextInput
            style={style.inputText}
            label="Contato" variant="outlined"
            onChange={value=>{ handleChange('telefone',value) }}
            onChangeText={handleChange('telefone')}
            onBlur={handleBlur('telefone')}
            value={values.telefone}
            render = { props =>
           <TextInputMask
             type={'cel-phone'}
             options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
            value={values.telefone}
            onChange={value=>{ handleChange('telefone',value) }}
            onChangeText={handleChange('telefone')}
     
            {...props}
           />
            }
          />

          <TextInput
            style={style.inputText}
            label="Valor" variant="outlined"
            onChangeText={handleChange('valor')}
            value={values.valor}
            render = { props =>
           <TextInputMask
            value={values.valor}
            onChange={value=>{ handleChange('valor',value) }}
            onChangeText={handleChange('valor')}
            type={'money'}
            {...props}
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: 'R$',
                suffixUnit: ''
              }}
           />
            }
          />
          {errors.valor && touched.valor ? ( <TextError>{errors.valor}</TextError> ) : null}

     



        </View>
 
   
      <View style={style.headerCad}>

        <Button
          style= {{background:'#5e17eb', paddingTop:2, marginTop:100, width:150, height:40}}
          onPress = { handleSubmit }
          color='white'> Anunciar</Button>
      </View>


   </KeyboardView>  
   
  
     
    )}
   </Formik>
   )
}
export default  Work