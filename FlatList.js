import React from 'react';
import { SafeAreaView,Image, View, FlatList, StyleSheet, Text, StatusBar, TextInput } from 'react-native';

const DATA = [
    {
      id: "1",
      title: "Task 1",
    },
    {
      id: "2",
      title: "Task 2",
    },
    {
      id: "3",
      title: "Task 3",
    },
    {
        id: "4",
        title: "Task 4",
      },
  ];

export default function flatList(){

    const ListItem = ({item}) => {
        return(
            <View style = {style.flatList}>
                <View style = {{flexDirection:'row', flex: 1}}>  
                    <Image style = {style.imageItem} source = {item.id % 2 === 0 ?  require('./image/tron.png') : require('./image/check.png') }></Image>
                    <Text>{item.title}</Text>
                </View>
                <View>
                    <Image style = {style.imageItem} source = {require('./image/delete.png')} />
                </View>
            </View>
        );
    }
    return(
        <View style = {style.content}>
            <View style = {style.inputData}>
                <TextInput style = {style.input} placeholder = {"Enter todo"}/>
                <Image  style = {style.image}
                    source = {require('./image/cong.png')}>
                </Image>
            </View>

            <View style = {style.list}>
                <FlatList
                    data={DATA}
                    renderItem={({item})=>
                      <ListItem item = {item}/>  
                    }
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
        backgroundColor: '#ffff'

    },
    image:{
        marginLeft: 5,
        width: 50,
        height: 50,
    },

    list:{
        marginTop: 15,
    },

    flatList:{
        marginTop: 2,
        paddingLeft: 12,
        paddingTop:30,
        paddingBottom: 30,
        paddingRight: 12,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#8c8c8c'

    },
    imageItem: {
        marginTop: 2,
        marginRight: 5,
        height: 20,
        width: 20
    }

});
