import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text, View } from "react-native";
import {Link} from "expo-router";

export default function App(){
    return(
        <View style={style.container}>
            <Text>App!</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={{color:'blue'}}>Go</Link>
        </View>
    );
}

const style= StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor :'#fff',
        alignItems:'center',
        justifyContent:'center'

    }
})













