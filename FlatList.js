/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, View, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ListItem from './Component/ComponentListItem';

const DATA = [
  {
    id: 1,
    title: 'Task 1',
    choose: true,
  },
  {
    id: 2,
    title: 'Task 2',
    choose: false,
  },
  {
    id: 3,
    title: 'Task 3',
    choose: true,
  },
  {
    id: 4,
    title: 'Task 4',
    choose: false,
  },
];

export default function flatList() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(DATA);

  const addItem = () => {
    if (title !== '') {
      // eslint-disable-next-line no-undef
      data.push({ id: data[data.length - 1].id + 1, title: title });
    }
    setData(data);
    setTitle('');
  };

  const deleteItem = (id) => {
    let d = [...data];
    console.log(id);
    for (let i = 0; i < d.length; i++) {
      if (d[i].id === id) {
        d.splice(i, 1);
        setData(d);
      }
    }
  };

  const choose = (id) => {
    let list = [...data];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        if (list[i].choose) {
          list[i].choose = false;
          setData(list);
        } else {
          list[i].choose = true;
          setData(list);
        }
      }
    }
  };

  return (
    <View style={style.content}>
      <View style={style.inputData}>
        <TextInput style={style.input} placeholder={'Enter todo'} onChangeText={setTitle} />
        <TouchableOpacity onPress={() => addItem()}>
          <Image style={style.image} source={require('./image/cong.png')} />
        </TouchableOpacity>
      </View>

      <View style={style.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} check={choose} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  inputData: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#8c8c8c',
    backgroundColor: '#A0B9D2',
  },
  content: {
    flex: 1,
    marginTop: 20,
    margin: 5,
  },
  input: {
    paddingLeft: 10,
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#8c8c8c',
    backgroundColor: '#ffff',
  },
  image: {
    marginLeft: 5,
    width: 50,
    height: 50,
  },
  list: {
    marginTop: 15,
  },
});
