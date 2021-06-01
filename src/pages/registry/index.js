import React,{useState,useContext} from 'react'

import style from './style'
import { Text, SafeAreaView,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input , TextError,TextArea, CurrencyInputStyle} from '../../Components/Form';
 import * as Yup from 'yup';
 import { Formik ,resetForm} from 'formik';
 import api from '../../services/api'
 //import TextInputMasks from 'react-native-text-input-mask';
 import AuthContext from '../../context/AuthContext'

import { TextInput , Button,Switch,Badge ,IconButton} from 'react-native-paper';
 import {View,KeyboardView,ViewLogo} from '../../Components/Containers/container'

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

const Registry = ({navigation}) => {
   const {user, SignIn, signed, errorLogin} = useContext(AuthContext)
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [avatar, setAvatar] = useState();

  //escolher imagem
    async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });
    console.log(data);

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  //  Validações
  const RegistrySchema = Yup.object().shape({
    nome: Yup.string().required('Campo Obrigatório'),
    senha: Yup.string()
     .min(10, 'A descrição deve conter no minímo 10 caracters!')
     .required('Campo Obrigatório'),
  
  });
  

  const  submit = async (values, {setSubmitting, setErrors, setStatus, resetForm}) =>{
      try{
        console.log(avatar.uri);
   
        values.is_professional = isSwitchOn
        if(avatar){
          values.image = avatar.uri

        }
        console.log(values);
       let res = await  api.post('/novo-usuario',values);
        
        if(res) {
          let cad = true;
          SignIn(res,cad)
          resetForm({})
            
        }
        
      }catch(e){
        
      }
   
  }

  return (
    <Formik initialValues={{ 
     nome:'',
     email:'',
     senha:'',
     is_professional:false,
     image:null

    }}

     validationSchema={RegistrySchema}

    onSubmit={submit}>
     

     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
    <KeyboardView>
          <View >
          { avatar?
               <>
            <Image source={{uri:avatar.uri}} style={style.avatar}/>
                <Button color='#5e17eb' style={{background:'white'}} 
               onPress={imagePickerCall}>Alterar</Button>
             </>: 
            <View style={style.button}>  
                <Badge  style={{backgroundColor:'#5e17eb'}} size={100}>
                    <IconButton
                      icon="camera"
                      color={'white'}
                      size={60}
                      onPress={imagePickerCall}
                    />
                </Badge>
            </View>
            }
        </View>

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
          <Switch   color="#5e17eb" value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View> 

        <View>
            <Button
            style= {{backgroundColor:'#5e17eb' , paddingTop:2, borderRadius:16, marginTop:70, width:150, height:40}}
            onPress={handleSubmit}
            color='white'>Finalizar</Button>
        </View>
      </View>

    </KeyboardView>  
  
     )}
   </Formik>
   )
}
export default  Registry