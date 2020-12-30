import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Form(){

    const [eyes, setEyes] = useState(true);

    const show = (name) =>{
        return(
            <View style = {{
                marginTop: '3%',
                flex: 1,
            }}>
                <Text style = {style.titleText}>{name}*</Text>
                <TextInput style = {{
                    borderColor: 'gray', 
                    borderWidth: 1,
                    borderRadius: 20,
                    paddingLeft: 15,
                }} placeholder={name}>

                </TextInput>
                
            </View>
        );
    }

    return(
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

            {show("Tên người dùng ")}
            {show("Email ")}
            {show("Số điện thoại ")}
            {show("Tên tài khoản ")}

            <View style = {{
                marginTop: '3%',
                flex: 1,
            }}>
                <Text style = {style.titleText}>Mật khẩu *</Text>
                    <View>
                        <TextInput style = {{
                            borderColor: 'gray', 
                            borderWidth: 1,
                            borderRadius: 20,
                            paddingLeft: 15,
                        }} placeholder="Mật khẩu" secureTextEntry={eyes}/>
                        <TouchableOpacity style = {style.buttonEyes} onPress ={()=>setEyes(!eyes)}>
                            {eyes ? 
                                <Image style = {style.styleImage}
                                source = {require('./image/eyes.png')}>
                                </Image>
                            :
                                <Image style = {style.styleImage}
                                source = {require('./image/eyes_on.png')}>
                                </Image>
                            }
                            
                        </TouchableOpacity>
                    </View>
                
            </View>
            <View style = {{
                marginTop: '3%',
                flex: 1,
            }}>
                <Text style = {style.titleText}>Xác nhận mật khẩu *</Text>
                <View>
                    <TextInput style = {{
                        borderColor: 'gray', 
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingLeft: 15,
                    }} placeholder="Xác nhận mật khẩu" secureTextEntry={eyes}>
                    </TextInput>
                    <TouchableOpacity style = {style.buttonEyes} onPress ={()=>setEyes(!eyes)}>
                            {eyes ? 
                                <Image style = {style.styleImage}
                                source = {require('./image/eyes.png')}>
                                </Image>
                            :
                                <Image style = {style.styleImage}
                                source = {require('./image/eyes_on.png')}>
                                </Image>
                            }
                            
                        </TouchableOpacity>

                </View>
               
            </View>
            
            <View style = {{
                flexDirection: 'row',
                marginTop: '8%',
                justifyContent: 'center',
                flex: 1,
            }}>
                <TouchableOpacity style = {style.buttonView}>
                    <Text style= {style.textButton}>Đăng Nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[style.buttonView,{marginLeft: '10%', backgroundColor: '#00BFFF'}]}>
                    <Text style= {[style.textButton,{color: '#FFFFFF'}]}>Đăng Ký</Text>
                </TouchableOpacity>
            </View>

            <View style = {{justifyContent: 'center'}}>
                <Text style = {{textAlign: 'center'}}> Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý</Text>
                <Text style = {{textAlign: 'center'}}> với các <Text style = {{color: '#00BFFF'}}> điều khoản quy định </Text> của chúng tôi </Text>
            </View>

        </View>
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
    
    buttonEyes:{
        position: 'absolute',
        left: '88%',
        top: '20%',
    },

    styleImage:{
        height: 30,
        width:35,
    }
});

