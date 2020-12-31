import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function hompage() {

    // const Component1 = ({value, onPress, style, styleTxt}) => {
    //     const handleClick = () => {
    //       onPress && onPress(value);
    //     };
    //     return (
    //         <TouchableOpacity onPress={handleClick} style={[style.itemC, style]}>
    //             <Text style={[{fontSize: 40},styleTxt]}>{value}</Text>
    //         </TouchableOpacity>
    //     );
    //   };

    // <Component1 value={9} onPress={this.handleClick} style={styles.itemN} styleTxt={{fontSize:40}}/>
    

    return(
        <View style = {{justifyContent: 'center', flexDirection: "row", marginTop: '40%'}}>
            <TouchableOpacity style = {style.touchClick}>
                <Text style = {style.textButton}> Calculator </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[style.touchClick,{marginLeft: '20%'}]}>
                <Text style = {style.textButton} > Register </Text>
            </TouchableOpacity>

            
        </View>

    );
    
}

const style = StyleSheet.create({

    touchClick:{
        borderWidth: 2,
        borderColor: '#b3ffcc',
        backgroundColor: '#e6ffee'
    },

    textButton: {
        padding: '5%',
        fontWeight: "bold",
    }

});