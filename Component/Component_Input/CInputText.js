import React, { useState, BackHandler } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CInputText({ label, onChangeText, value }) {
  return (
    <View
      style={{
        marginTop: '3%',
        flex: 1,
      }}
    >
      <Text style={{ color: '#696969' }}>{label}*</Text>
      <TextInput
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 20,
          paddingLeft: 15,
        }}
        placeholder={label}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
}
