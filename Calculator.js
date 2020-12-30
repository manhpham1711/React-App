import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Calculator() {
    const [result, setOutput] =  useState("0");

    const getOutput=(x)=>{
        let data = result;
        if(data == "0"){data="";data+=x; }else{data+=x;}
        setOutput(data);
    };

    const calculate = ()=>{
        setOutput(eval(result))
    }


    
    const clear =()=>{
        setOutput("0");
    };

    const show =(input,styleThis)=>{
        return (
            <TouchableOpacity style={styleThis} onPress = {()=>getOutput(input)}>
                    <Text style={{fontSize: 60}}>{input}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <View  style={style.result}>
                <Text style={style.textResult}>{result}</Text>
            </View>
            <View style={style.calView}>
                <TouchableOpacity style={style.clearButton}  onPress = {()=>clear()}>
                    <Text style={style.clear}>Clear</Text>
                </TouchableOpacity>
                {show("/",style.calButton)}
            </View>
            <View style={style.calView}>
                {show("7",style.numButton)}
                {show("8",style.numButton)}
                {show("9",style.numButton)}
                {show("-",style.calButton)}
            </View>
            <View style={style.calView}>
                {show("4",style.numButton)}
                {show("5",style.numButton)}
                {show("6",style.numButton)}
                {show("+",style.calButton)}
            </View>
            <View style={style.calView}>
                {show("1",style.numButton)}
                {show("2",style.numButton)}
                {show("3",style.numButton)}
                <TouchableOpacity style={style.calButton}>
                    <Text style={{fontSize: 60}} onPress = {()=>calculate()} >=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }

    const style = StyleSheet.create({
    result:{
        backgroundColor:'black',
        height: 150,
    },
    textResult:{
        color: 'white', 
        fontSize: 80,
    },
    calView:{
        height:150,
        flexDirection: 'row',
    },
    clear:{
        fontSize: 70, 
        textAlign: 'center',
    },
    clearButton:{
        width: '75%',
        backgroundColor:'white',
        borderWidth: 1, 
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    calButton:{
        width: '25%' ,
        backgroundColor:'red',
        borderWidth: 1, 
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    numButton:{
        width: '25%' ,
        backgroundColor:'white',
        borderWidth: 1, 
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    });


