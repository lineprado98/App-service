import React,{useState} from 'react'

import estilo from './style'
import { Text, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input , TextError,TextArea, CurrencyInputStyle} from '../../Components/Form';
// import MultiSelect from 'react-native-multiple-select';
 import * as Yup from 'yup';
 import { Formik ,resetForm} from 'formik';
 import api from '../../services/api'
import FlashMessage from "react-native-flash-message";
import CurrencyInput from 'react-native-currency-input';
import { TextInput , Button} from 'react-native-paper';
 import {View,KeyboardView,ViewLogo} from '../../Components/Containers/container'


const Work= ({navigation}) => {
  // class MultiSelectExample extends Component {

  // state = {
  //   selectedItems : [];
  // };
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


  const [selectedItems, setSelectedItems] = useState([]);
  
  const onSelectedItemsChange = (selectedItems) => {
    // Set Selected Items
    setSelectedItems(selectedItems);
  };

  const  submit = async (values, {setSubmitting, setErrors, setStatus, resetForm}) =>{

      try{
        let res = await  api.post('/servico',values);
        if(res){
          resetForm({})
              

        }
        
      }catch(e){
        
      }
   
  }

  return (
    <Formik initialValues={{ 
     titulo: '',
     descricao:'',
     valor:null,
     id_categoria:1,
      id_user:1 }}

     validationSchema={SignupSchema}

    onSubmit={submit}>
     

     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
    <KeyboardView>
      <View >


      <Text style={estilo.titulo}>Adicionar Serviço</Text>
           <TextInput
            style={{ marginTop: 5,
            backgroundColor:'transparent',
            width:'60%'
            }}
          label="Título" variant="outlined"
           onChangeText={handleChange('titulo')}
           onBlur={handleBlur('titulo')}
           value={values.titulo}
         />
           {errors.titulo && touched.titulo ? (
             <TextError>{errors.titulo}</TextError>
           ) : null}

          <TextInput
            style={{ marginTop: 5,
            backgroundColor:'transparent',
            width:'60%'
            }}
           label="Descrição" variant="outlined"
           multiline={true}
           onChangeText={handleChange('descricao')}
           onBlur={handleBlur('descricao')}
           value={values.descricao}
         />
           {errors.descricao && touched.descricao ? (
             <TextError>{errors.descricao}</TextError>
           ) : null}

           <TextInput
            style={{ marginTop: 5,
            backgroundColor:'transparent',
            width:'60%'
            }}
           label="Valor" variant="outlined"

            name="valor"
            onChangeText={handleChange('valor')}
           onChangeValue={values.valor}
           onBlur={handleBlur('valor')}
           value={values.valor} />

           
          {errors.valor && touched.valor ? (
             <TextError>{errors.valor}</TextError>
           ) : null}
 
        <View  style={estilo.select}>
        {/* <MultiSelect
            hideTags
            items={items}
            uniqueKey="id"
            //  ref={() => { multiSelect = commponet }}
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Categorias"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={ (text)=> console.log(text)}
            // altFontFamily="ProximaNova-Light"
            // tagRemoveIconColor="#CCC"
            // tagBorderColor="#CCC"
            // tagTextColor="#CCC"
            // selectedItemTextColor="#CCC"
            // selectedItemIconColor="#CCC"
            // itemTextColor="#000"
            
            displayKey="name"
            // submitButtonColor="#CCC"
            submitButtonText="Submit"
        /> */}
        <View>
          {/* {(selectedItems)} */}
        </View>
      </View>
    <View style={estilo.headerCad}>

   <Button
       style={{background:'#5e17eb'}}
       color='white'
        title="Salvar"
        onPress={handleSubmit}
        >mmm</Button>

      </View>
      </View>

    </KeyboardView>  
   
  
     )}
   </Formik>
   )
}
export default  Work