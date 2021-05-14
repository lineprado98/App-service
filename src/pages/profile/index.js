import React, { useContext, useEffect ,useState} from 'react'
import estilo from './style'
import { Text, View ,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext  from '../../context/AuthContext'


const Profile= ({navigation}) => {
 const {user} = useContext(UserContext)
 const [usuarioLogado, setUsuarioLogado] = useState(user)





const teste= () =>{
 navigation.goBack()

}
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text> Olá {usuarioLogado.name}</Text> */}
{/*       
       <Button
        title="Ir para o inicio"
        onPress={teste}
      /> */}
    </View>
  );
}
export default  Profile



