import React,{useState} from 'react'

import estilo from './style'
import { Text, View ,Button, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input , TextError,TextArea, CurrencyInputStyle} from '../../Components/Form';
// import MultiSelect from 'react-native-multiple-select';
 import * as Yup from 'yup';
 import { Formik ,resetForm} from 'formik';
 import api from '../../services/api'
import FlashMessage from "react-native-flash-message";
import CurrencyInput from 'react-native-currency-input';


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
    <SafeAreaView style={ estilo.container}>
      <View style={estilo.content}>


      <Text style={estilo.titulo}>Adicionar Serviço</Text>
           <Input
           placeholder="Título"
           onChangeText={handleChange('titulo')}
           onBlur={handleBlur('titulo')}
           value={values.titulo}
         />
           {errors.titulo && touched.titulo ? (
             <TextError>{errors.titulo}</TextError>
           ) : null}

          <TextArea
           placeholder="Descrição"
           multiline={true}
           onChangeText={handleChange('descricao')}
           onBlur={handleBlur('descricao')}
           value={values.descricao}
         />
           {errors.descricao && touched.descricao ? (
             <TextError>{errors.descricao}</TextError>
           ) : null}

           <Input
           style={{background:'white',
            width:'95%',
            marginLeft:'8px',
            marginTop:'2px',

            border:2,
            border:'solid 3px #9e9e9e',
            borderWidth:1,
            borderRadius:5,
            height:'35px'}}
            name="valor"
           placeholder="Valor"
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
      {/* <View style={estilo.btn}>
         <Button
          title="Cancelar"
          color="#d23350"
          />  
      </View> */}
     <View style={estilo.btn}>
       <Button
        title="Salvar"
        onPress={handleSubmit}
      />
      </View>

      </View>
      </View>

    
    </SafeAreaView>
  
     )}
   </Formik>
   )
}
export default  Work