/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AxiosIntance from './ultil/AxiosIntance';

const PostNews = () => {
  const [imageNe, setimageNe] = useState(null);
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');

  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);

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
    console.log(respone);

    if (respone.error == false) {
      setimageNe(respone.data.path);
      ToastAndroid.show('Upload ảnh thành công', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Upload ảnh thất bại', ToastAndroid.SHORT);
    }
  };

  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);

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
    console.log(respone);

    if (respone.error == false) {
      setimageNe(respone.data.path);
      ToastAndroid.show('Upload ảnh thành công', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Upload ảnh thất bại', ToastAndroid.SHORT);
    }
  };

  const dangTin = async () => {
    const response = await AxiosIntance().post('/articles', {
      title: title,
      content: content,
      image: imageNe,
    });
    if (response.error == false) {
      ToastAndroid.show('Đăng tin thành công', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Đăng tin thất bại', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <Text
        style={{
          color: 'green',
          fontSize: 30,
          textAlign: 'center',
          fontWeight: '700',
          fontStyle: 'normal',
        }}>
        Đăng Tin
      </Text>
      <Image style={styles.image} source={{uri: imageNe}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button title="Chụp Ảnh" onPress={capture} />
        <Button title="Chọn Ảnh Từ Thư Viện" onPress={getImageLibrary} />
      </View>
      <View style={styles.backgroundImage}>
        <TextInput
          placeholder="Tiêu đề"
          style={styles.text}
          onChangeText={settitle}
        />
      </View>
      <View style={styles.backgroundImage}>
        <TextInput
          placeholder="Nội dung"
          style={styles.text}
          onChangeText={setcontent}
        />
      </View>
      <View style={styles.button}>
        <Button color="green" title="Đăng tin" onPress={dangTin} />
      </View>
    </View>
  );
};

export default PostNews;

const styles = StyleSheet.create({
  image: {
    height: 300,
    margin: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 3,
  },
  button: {
    backgroundColor: 'red',
    marginHorizontal: 10,
  },
  text: {
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  },
});
