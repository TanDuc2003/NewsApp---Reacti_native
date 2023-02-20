/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import AxiosIntance from './ultil/AxiosIntance';
import {AppContext} from './ultil/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DangNhap = props => {
  const {navigation} = props;
  const [emailuser, setemailuser] = useState('hello123@gmail.com');
  const [passworduser, setpassworduser] = useState('123123');
  const {setIsLogin, setinfoUser} = useContext(AppContext);

  const DangnhapNe = async () => {
    console.log(emailuser, passworduser);
    try {
      const res = await AxiosIntance().post('/auth/login', {
        email: emailuser,
        password: passworduser,
      });
      if (res.error == false) {
        setinfoUser(res.data.user);
        setIsLogin(true);
        await AsyncStorage.setItem('token', res.data.token);
        ToastAndroid.show('Đăng Nhập thành công', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Đăng nhập that bai', ToastAndroid.SHORT);
      }
    } catch {
      ToastAndroid.show('Đăng nhập thất bại', ToastAndroid.SHORT);
    }
  };

  const clickNe = () => {
    navigation.navigate('DangKy');
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={newValue => setToggleCheckBox(newValue)}
  />;
  return (
    <View style={styles.container}>
      <Text style={styles.view1}>Hello</Text>
      <Text style={[styles.view1, {color: '#1877F2'}]}>Again!</Text>
      <Text style={styles.view2}>Welcome back you’ve{'\n'}been missed </Text>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textWord}>Username</Text>
        <Text style={[styles.textWord, {color: '#C30052'}]}>*</Text>
      </View>
      <View>
        <TextInput style={styles.textInput} onChangeText={setemailuser} />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textWord}>Password</Text>
        <Text style={[styles.textWord, {color: '#C30052'}]}>*</Text>
      </View>
      <Image
        style={{
          position: 'absolute',
          marginTop: 367,
          marginLeft: 310,
        }}
        source={require('./images/mat.png')}
      />
      <TextInput style={styles.textInput} onChangeText={setpassworduser} />

      <View style={styles.textMe}>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            style={{marginTop: -1}}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: '#1877F2', false: '#1877F2'}}
          />
          <Text style={[styles.textMe, {color: '#4E4B66'}]}>Remember me</Text>
        </View>
        <Text style={styles.textMe}>Forgot the password ?</Text>
      </View>
      <Pressable style={styles.nut} onPress={DangnhapNe}>
        <Text style={styles.textNut}>Login</Text>
      </Pressable>
      <Text style={styles.textOr}>or continue with</Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <Pressable style={styles.buttonSocial}>
          <Image
            style={styles.imagesSocial}
            source={require('./images/Icon.png')}
          />
          <Text
            style={{
              color: '#4E4B66',
              fontFamily: 'Popoins',
              fontStyle: 'normal',
              fontSize: 16,
            }}>
            Facebook
          </Text>
        </Pressable>
        <Pressable style={styles.buttonSocial}>
          <Image
            style={styles.imagesSocial}
            source={require('./images/item.png')}
          />
          <Text
            style={{
              color: '#4E4B66',
              fontFamily: 'Popoins',
              fontStyle: 'normal',
              fontSize: 16,
            }}>
            Google
          </Text>
        </Pressable>
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 16}}>
        <Text
          style={{
            color: '#4E4B66',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 15,
            textAlign: 'center',
          }}>
          don’t have an account ?{' '}
        </Text>
        <Pressable onPress={clickNe}>
          <Text
            style={{
              color: '#1877F2',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 15,
              textAlign: 'center',
            }}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DangNhap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 25,
    marginEnd: 25,
    // backgroundColor: 'white',
    flexDirection: 'column',
  },
  textOr: {
    color: '#4E4B66',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  view1: {
    fontWeight: '700',
    fontFamily: 'Poppins',
    fontSize: 48,
    color: '#050505',
  },
  view2: {
    fontWeight: '400',
    fontSize: 25,
    fontFamily: 'Popins',
    marginTop: 4,
    marginBottom: 32,
    color: '#4E4B66',
    fontStyle: 'normal',
  },
  textInput: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 4,
  },

  nut: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },
  textNut: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textWord: {
    marginTop: 16,
    color: '#4E4B66',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
  },
  textMe: {
    marginTop: 5,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '400',
    flexDirection: 'row',
    color: '#5890FF',
    justifyContent: 'space-between',
  },
  imagesSocial: {
    width: 21,
    height: 21,
    marginEnd: 10,
  },
  buttonSocial: {
    flexDirection: 'row',
    width: 150,
    height: 48,
    backgroundColor: '#E0E0E0',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
