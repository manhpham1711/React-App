import React, {useState} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function ComponentNumber({value, onPress, styleNumButton, styleThis}){
    const getOutput = () => {
      onPress && onPress(value);
    };
    return (
      <TouchableOpacity
          style={[styleNumButton, styleThis && styleThis]}
          onPress={getOutput}>
          <Text style={{fontSize: 60}}>{value}</Text>
      </TouchableOpacity>

    );
  };