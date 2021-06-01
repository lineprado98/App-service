import React, { useContext, useEffect ,useState} from 'react'
import style from './style'
import { Text, View ,Button,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext  from '../../context/AuthContext'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { color } from 'react-native-reanimated';


const Profile= ({navigation}) => {
 const {user} = useContext(UserContext)
 const [usuarioLogado, setUsuarioLogado] = useState(user)



console.log(UserContext);

const teste= () =>{
 navigation.goBack()

}
  return (
    <SafeAreaView style={style.safeArea}>
          <View style={style.container} >
              <Avatar.Image size={180}   source={"https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg"} />
      <View style={style.paragrafo}>
          <AirbnbRating
          type='star'
          ratingCount={5}
          imageSize={30}
          showRating={false}
          onFinishRating={20}/>
       </View>

      {/*       
       <Button
        title="Ir para o inicio"
        onPress={teste}
      /> */}
    </View>
    <View style={style.cardPerfil}>
      <View style={style.paragrafo}>
     <Text style={style.titulo}>Perfil:</Text>
      <Text style={style.texto}>Profissional</Text>
    </View>
  
     <View style={style.paragrafo}>
     <Text style={style.titulo}>Anúncios:</Text>
      <Text style={style.texto}>7</Text>
    </View>
    </View>

  

    </SafeAreaView>

  );
}
export default  Profile



