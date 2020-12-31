import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ComponentNumber from './Component/ComponentNumber';

export default function Calculator() {
  const [result, setOutput] = useState('0');

  const getOutput = (x) => {
    let data = result;
    if (data == '0') {
      data = '';
      data += x;
    } else {
      data += x;
    }
    console.log("nfhfhf" + data);
    setOutput(data);
  };

  const calculate = () => {
    setOutput(eval(result));
  };

  const clear = () => {
    setOutput('0');
  };

  return (
    <>
      <View style={style.result}>
        <Text style={style.textResult}>{result}</Text>
      </View>
      <View style={style.calView}>
        <TouchableOpacity style={style.clearButton} onPress={() => clear()}>
          <Text style={style.clear}>Clear</Text>
        </TouchableOpacity>
        <ComponentNumber value={'/'} onPress={getOutput} styleThis = {style.calButton}/>
      </View>
      <View style={style.calView}>
        <ComponentNumber value={'7'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <ComponentNumber value={'8'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <ComponentNumber value={'9'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <ComponentNumber value={'-'} onPress={getOutput} styleThis = {style.calButton}/>
      </View>
      <View style={style.calView}>
        <ComponentNumber value={'4'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <ComponentNumber value={'5'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <ComponentNumber value={'6'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <ComponentNumber value={'+'} onPress={getOutput} styleThis = {style.calButton}/>
      </View>
      <View style={style.calView}>
        <ComponentNumber value={'1'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <ComponentNumber value={'2'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <ComponentNumber value={'3'} onPress={getOutput} styleNumButton = {style.numButton}/>
        <TouchableOpacity style={style.calButton}>
          <Text style={{fontSize: 60}} onPress={() => calculate()}>
            =
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  result: {
    backgroundColor: 'black',
    height: 150,
  },
  textResult: {
    color: 'white',
    fontSize: 80,
  },
  calView: {
    height: 150,
    flexDirection: 'row',
  },
  clear: {
    fontSize: 70,
    textAlign: 'center',
  },
  clearButton: {
    width: '75%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calButton: {
    width: '25%',
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numButton: {
    width: '25%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
