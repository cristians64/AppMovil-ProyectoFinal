import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";

//estilos globales
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: "blue",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    titleBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInputs: {
        marginTop: 40,
        gap: 10
    },
    button: {
        marginTop: 30,
        backgroundColor: "red",
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 13
    },
    textRedirection: {
        color: "white",
        marginTop: 30,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    contentCard:{
        flexDirection:"row",
        alignItems:"center",
        padding:15,
        borderColor:"gray",
        borderWidth:1,
        marginBottom:15,
        borderRadius:10,
        /*shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.23,
        shadowRadius:2.02,
        elevation:2*/

    
    },
    titleCard:{
        fontWeight:"bold",
        fontSize:15,
        color:"#000"
    },
    imageCard:{
        width:70,
        height:70
    },
    iconCard:{
        flex:1,
        alignItems:"flex-end"
    },
    contentPrincipal:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.5)",

    },
    modal:{
        backgroundColor:"red",
        padding:25,
        borderRadius:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:4

    },
    headerModal:{
         flexDirection:"row",
         borderBottomColor:"#ccc",
         borderBottomWidth:2,
         padding:10
         
    },
    titleModal:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    },
    imageModal:{
        width:150,
        height:150
    },
    contentBodyModal:{
        alignItems:"center"
    },
    contentCantidad:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    buttomCantidad:{
        width:50,
        height:50,
        backgroundColor:"white",
        borderRadius:65,
        justifyContent:"center",
        alignItems:"center",
        margin:15
    },
    textButtomCantidad:{
        color:"black",
        fontSize:20,
        fontWeight:"bold"
    },
    textCantidad:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
    buttomAdd:{
        marginTop:15,
        backgroundColor:"blue",
        padding:10,
        alignItems:"center",
        borderRadius:5,
        color:"white"
    }



})