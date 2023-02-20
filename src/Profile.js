/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {AppContext} from './ultil/AppContext';
import {launchCamera} from 'react-native-image-picker';
import AxiosIntance from './ultil/AxiosIntance';

const Profile = props => {
  const {infoUser, setinfoUser} = useContext(AppContext);
  const {navigation} = props;
  const uploadAvatar = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);

    //upload anh
    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const respone = await AxiosIntance('multipart/form-data').post(
      '/media/upload',
      formdata,
    );
    console.log(respone.data.path);
    setinfoUser({...infoUser, avatar: respone.data.path});
  };

  // const Click = () => {
  //     navigation.navigate('NewsDetail');
  // }

  return (
    <View style={styles.container}>
      <Image
        style={{
          marginTop: 25,
          marginLeft: 25,
        }}
        source={require('./images/chuyen.png')}
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: -19,
          fontSize: 16,
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 'bold',
          color: '#000000',
        }}>
        Fill your Profile
      </Text>

      <View
        style={[
          {justifyContent: 'center', alignItems: 'center', marginTop: 16},
        ]}>
        <Image source={require('./images/chandung.png')} />
        <Pressable
          style={[
            {
              marginTop: -30,
              marginLeft: 70,
              width: 30,
              height: 30,
              backgroundColor: '#1877F2',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Image
            style={[{color: 'white'}]}
            source={require('./images/selfie.png')}
          />
        </Pressable>
      </View>

      <TouchableOpacity onPress={uploadAvatar} />

      <Text>{infoUser.email}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.textWord, {marginLeft: 25, fontWeight: '400'}]}>
          Username
        </Text>
        <Text style={[styles.textWord, {color: '#C30052', fontWeight: '400'}]}>
          *
        </Text>
      </View>
      <TextInput value={infoUser.name} style={styles.textInput} />
      <View style={{flexDirection: 'row', marginTop: -10}}>
        <Text style={[styles.textWord, {marginLeft: 25, fontWeight: '400'}]}>
          Full Name
        </Text>
        <Text style={[styles.textWord, {color: '#C30052', fontWeight: '400'}]}>
          *
        </Text>
      </View>
      <TextInput value={infoUser.address} style={styles.textInput} />
      <View style={{flexDirection: 'row', marginTop: -10}}>
        <Text style={[styles.textWord, {marginLeft: 25, fontWeight: '400'}]}>
          Email Address
        </Text>
        <Text style={[styles.textWord, {color: '#C30052', fontWeight: '400'}]}>
          *
        </Text>
      </View>
      <TextInput value={infoUser.phone} style={styles.textInput} />
      <View style={{flexDirection: 'row', marginTop: -10}}>
        <Text style={[styles.textWord, {marginLeft: 25, fontWeight: '400'}]}>
          Phone Number
        </Text>
        <Text style={[styles.textWord, {color: '#C30052', fontWeight: '400'}]}>
          *
        </Text>
      </View>
      <TextInput value={infoUser.dob} style={styles.textInput} />
      <Pressable style={styles.nut}>
        <Text style={styles.textNut}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    padding: 10,
    marginStart: 25,
    marginEnd: 25,
    backgroundColor: 'white',
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 4,
  },
  textWord: {
    marginTop: 25,
    color: '#4E4B66',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
  },
  nut: {
    marginTop: 100,
    display: 'flex',
    marginStart: 25,
    marginEnd: 25,
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
});
