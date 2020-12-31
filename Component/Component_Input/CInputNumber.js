import React, {useState, BackHandler} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function CInputNumber({label, onChangeText}){
    
    return(
        <View>
            <Text style = {{color: '#696969'}}> {label} </Text>
            <TextInput style = {{ 
                borderColor: 'gray', 
                borderWidth: 1,
                borderRadius: 20,
                paddingLeft: 15,}} 
                keyboardType = {'number-pad'}
                placeholder={label}
                onChangeText={(text)=>onChangeText(text)}
              />
        </View>
    );
}