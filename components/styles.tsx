import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        paddingInline:30,
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        justifyContent:"center",
        gap:10
      },
      header:{
        height:50
      },
      scrView:{
        flex:1,
        position:"relative",
      },
      welcometitle:{
        fontSize:40,
        textAlign:"center",
        fontWeight:"bold"
      },
      button:{
        paddingInline:20,
        paddingBlock:15,
        backgroundColor:"blue",
        borderRadius:7,
        width:'100%',
      },
      buttontext:{
        color:"#ffffff",
        textAlign:"center",
        fontSize:20
      },
      inputWrapper:{
        gap:5,
      },
      input:{
        height:50,
        width:"100%",
        borderRadius:5,
        paddingInline:15,
        backgroundColor:"#fff",
        borderWidth:2,
        fontSize:20,
        borderColor:"#eaeaea"

      },
      label:{
        fontSize:12,
        color:"#999"
      }
})

export default styles;