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
      body:{
        padding:15
      },
      welcometitle:{
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold",
        padding:15
      },
      buttonWrapper:{
        gap:10
      },
      button:{
        paddingInline:20,
        paddingBlock:15,
        backgroundColor:"#000",
        borderRadius:7,
        width:'100%',
      },
      buttontext:{
        color:"#ffffff",
        textAlign:"center",
        fontSize:20
      },
      cityButton: {
        paddingInline:20,
        paddingBlock:15,
        borderRadius:7,
        paddingVertical: 10,
        width: "80%",
        alignSelf: "center",
        boxShadow:"1 1 10 0 rgba(40,40,40,0.1)"
      },
      cityDescription:{
        textAlign: "left",
          fontSize: 16,
          marginTop: 10,
          gap:15,
          paddingBlock:15,
          paddingHorizontal: 25,
          lineHeight: 24,
      },
      pageImage:{
          width: "100%",
          height: 250,
          resizeMode: "cover",
      },
      cdText:{
        padding:15,
        backgroundColor:"#fff",
        borderRadius:10,
        boxShadow:"1 1 10 0 rgba(40,40,40,0.1)"
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