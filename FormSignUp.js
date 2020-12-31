import React, {useState, BackHandler} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView ,Image} from 'react-native';
import CInputNumber from './Component/Component_Input/CInputNumber';
import CInputPassword from './Component/Component_Input/CInputPassword';
import CInputText from './Component/Component_Input/CInputText';

export default function Form(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [userName, setUsername] = useState();
    const [passWord, setPass] = useState();
    const [cofirmPass, setConfim] = useState();

    const OutputText = () =>{
        alert("Name: "+name +"\nEmail: "+ email + "\nPhone: "+ phone +"\nPhone: "+ userName + "\nPassword: "+ passWord);
    }

    return(
        <ScrollView>
            <View style = {{
                margin: '3%',
                flex: 1,
            }}>
                <View style = {[style.title,{flex: 1}]}>
                    <TouchableOpacity style = {{
                        marginTop: '1%',
                        width: '10%',}}>
                            <Text style = {{
                                fontSize: 35,
                            }}>X</Text>
                    </TouchableOpacity>

                    <Text style = {{
                        width: '80%',
                        marginRight: '2%',
                        textAlign: 'center',
                        fontSize: 40,
                    }}>
                        Đăng Ký
                    </Text>
                </View>
            
                <CInputText label = {'Tên người dùng '} onChangeText = {setName}/>
                <CInputText label = {'Email '} onChangeText = {setEmail}/>
                <CInputNumber label = {'Số điện thoại '} onChangeText = {setPhone}/>
                <CInputText label = {'Tên tài khoản '} onChangeText = {setUsername} />

                <CInputPassword label = {'Mật khẩu'} onChangeText = {setPass}/>
                <CInputPassword label = {'Xác nhận lại mật khẩu'} onChangeText = {setConfim} />
                <View style = {{
                    flexDirection: 'row',
                    marginTop: '8%',
                    justifyContent: 'center',
                    flex: 1,
                }}>
                    <TouchableOpacity style = {style.buttonView} >
                        <Text style= {style.textButton}>Đăng Nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[style.buttonView,{marginLeft: '10%', backgroundColor: '#00BFFF'}]} onPress = {()=>OutputText()}>
                        <Text style= {[style.textButton,{color: '#FFFFFF'}]}>Đăng Ký</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{justifyContent: 'center'}}>
                    <Text style = {{textAlign: 'center'}}> Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý</Text>
                    <Text style = {{textAlign: 'center'}}> với các <Text style = {{color: '#00BFFF'}}> điều khoản quy định </Text> của chúng tôi </Text>
                </View>

            </View>
        </ScrollView>
    );
}
const style = StyleSheet.create({

    title:{
        justifyContent: 'center',
        flexDirection: 'row',
    },

    titleText: {
        color: '#696969'
    },
    buttonView:{
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#00BFFF',
        height: 40,
        width: 110,

    },

    textButton:{
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    
});

