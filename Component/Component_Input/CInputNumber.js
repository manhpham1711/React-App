import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function CInputNumber({ label, onChangeText, value }) {
  return (
    <View>
      <Text style={{ color: '#696969' }}> {label} </Text>
      <TextInput
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 20,
          paddingLeft: 15,
        }}
        keyboardType={'number-pad'}
        placeholder={label}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
}
