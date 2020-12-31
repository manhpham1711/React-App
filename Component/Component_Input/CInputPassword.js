import React, {useState, BackHandler} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function CInputPassword({label, onChangeText}){
    const [eyes, setEyes] = useState(true);
    return(
        <View style = {{
            marginTop: '3%',
            flex: 1,
        }}>
            <Text style = {{color: '#696969'}}>{label} *</Text>
            <View style= {{flexDirection: 'row', 
                    borderColor: 'gray', 
                    borderWidth: 1,
                    borderRadius: 20,}}>
                <TextInput style = {style.InputText} placeholder={label} secureTextEntry={eyes}  onChangeText={(text)=>onChangeText(text)}/>
                <TouchableOpacity onPress ={()=>setEyes(!eyes)}>
                    <Image style = {style.styleImage}
                        source = {eyes? require('../../image/eyes.png') : require('../../image/eyes_on.png') }>
                    </Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    InputText:{
        flex: 1,
        paddingLeft: 15,
    },
    styleImage:{
        top: '20%',
        height: 30,
        width:35,
        right: '10%'
    },
});