import React,{useState} from 'react'

import estilo from './style'
import { Text, View ,Button, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input , TextError,TextArea} from '../../Components/Form';
// import MultiSelect from 'react-native-multiple-select';


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
 
  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {
    // Set Selected Items
    setSelectedItems(selectedItems);
  };

     
const teste= () =>{
 navigation.goBack()

}
  return (
    <SafeAreaView style={ estilo.container}>
      <View style={estilo.content}>


      <Text style={estilo.titulo}>Adicionar Serviço</Text>
           <Input
           placeholder="Título"
          //  onChangeText={handleChange('email')}
          //  onBlur={handleBlur('email')}
          //  value={values.email}
         />
           {/* {errors.email && touched.email ? (
             <TextError>{errors.email}</TextError>
           ) : null} */}
                <TextArea
           placeholder="Descrição"
          //  onChangeText={handleChange('email')}
          //  onBlur={handleBlur('email')}
          //  value={values.email}
         />
           {/* {errors.email && touched.email ? (
             <TextError>{errors.email}</TextError>
           ) : null} */}

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
      <View style={estilo.btn}>
         <Button
        title="Cancelar"
        color="#d23350"
        onPress={teste}
      /></View>
     <View style={estilo.btn}>

       <Button
        title="Salvar"
        onPress={teste}
      
      />
      </View>

      </View>
      </View>

    
    </SafeAreaView>
  );
}
export default  Work