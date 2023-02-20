/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import AxiosIntance from './ultil/AxiosIntance';

const DangKy = props => {
  const {navigation} = props;

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [emailUser, setemailUser] = useState('');
  const [passwordUser, setpasswordUser] = useState('');

  const dangKyNe = async () => {
    console.log(emailUser, passwordUser);

    const responseDK = await AxiosIntance().post('/users/register', {
      email: emailUser,
      password: passwordUser,
    });
    console.log(responseDK);

    if (responseDK.error == false) {
      navigation.navigate('DangNhap');
      ToastAndroid.show('Dang ky thanh cong', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Dang ky that bai', ToastAndroid.SHORT);
    }
  };

  <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={newValue => setToggleCheckBox(newValue)}
  />;
  return (
    <View style={styles.container}>
      <Text style={[styles.view1, {color: '#1877F2'}]}>Hello!</Text>
      <Text style={styles.view2}>Signup to get Started</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textWord}>Username</Text>
        <Text style={[styles.textWord, {color: '#C30052'}]}>*</Text>
      </View>
      <TextInput style={styles.textInput} onChangeText={setemailUser} />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textWord}>Password</Text>
        <Text style={[styles.textWord, {color: '#C30052'}]}>*</Text>
      </View>

      <Image
        style={{
          position: 'absolute',
          marginTop: 273,
          marginLeft: 310,
        }}
        source={require('./images/mat.png')}
      />
      <TextInput style={styles.textInput} onChangeText={setpasswordUser} />

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
      </View>
      <Pressable style={styles.nut} onPress={dangKyNe}>
        <Text style={styles.textNut}>Sign Up</Text>
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
            fontSize: 14,
            textAlign: 'center',
          }}>
          Already have an account ?{' '}
        </Text>
        <Text
          style={{
            color: '#1877F2',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 14,
            textAlign: 'center',
          }}>
          Login
        </Text>
      </View>
    </View>
  );
};

export default DangKy;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    marginStart: 25,
    marginEnd: 25,
    // backgroundColor: 'white',
  },
  view2: {
    fontWeight: '400',
    fontSize: 20,
    fontFamily: 'Poppins',
    marginTop: 4,
    marginBottom: 32,
    color: '#4E4B66',
    fontStyle: 'normal',
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
