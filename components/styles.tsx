import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      welcometitle:{
        fontSize:40,
        textAlign:"center",
        fontWeight:600
      },
      button:{
        paddingInline:20,
        paddingBlock:10,
        backgroundColor:"blue",
        borderRadius:7,
        width:150
      },
      buttontext:{
        color:"#ffffff",
        textAlign:"center"
      },
      inputWrapper:{
        gap:5
      },
      input:{
        height:40,
        width:150,
        borderRadius:5,
        paddingInline:15,
        backgroundColor:"#fff",
        borderWidth:2,
        borderColor:"#eaeaea"

      },
      label:{
        fontSize:12,
        color:"#999"
      }
})

export default styles;