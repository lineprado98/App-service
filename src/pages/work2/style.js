
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maskedInput:{
    flexGrow:1,
    //height:40,
    fontSize:18,
    borderBottomColor:"#999",
    borderBottomWidth:1,
    borderStyle:"solid",
    alignSelf:"flex-start"

},
containerMask:{
    flexDirection:"row",
    marginBottom:20,
    marginLeft:10,
    marginRight:10
}


})

export default style
