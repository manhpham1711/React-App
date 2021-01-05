/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ListItem(props) {
  return (
    <View style={style.flatList}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <TouchableOpacity onPress={() => props.check(props.item.id)}>
          <Image
            style={style.imageItem}
            source={
              props.item.choose === true
                ? require('../image/check.png')
                : require('../image/tron.png')
            }
          />
        </TouchableOpacity>
        <Text>{props.item.title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => props.deleteItem(props.item.id)}>
          <Image style={style.imageItem} source={require('../image/delete.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  flatList: {
    marginTop: 2,
    paddingLeft: 12,
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#8c8c8c',
  },
  imageItem: {
    marginTop: 2,
    marginRight: 5,
    height: 20,
    width: 20,
  },
});
