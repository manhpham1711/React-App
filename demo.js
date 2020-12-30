import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  const getFullName = (firstName, secondName, thirdName) => {
    return firstName + " " + secondName + " " + thirdName;
  }
  return (
    <View>
      <Text>Hello, I am {getFullName("Pham ", "Van ", "Manh ")}!</Text>
      <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="Name me!"
        />
    </View>
  );
}

export default Cat;