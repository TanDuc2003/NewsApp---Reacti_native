/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AxiosIntance from './ultil/AxiosIntance';
import ItemListView from './ItemListView';

const NewsDetail = props => {
  const {navigation} = props;
  const {route} = props;
  const {params} = route;
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');
  const [image, setimage] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [dataNe, setdataNe] = useState([]);

  const Click = () => {
    navigation.pop();
  };

  useEffect(() => {
    const getNews = async () => {
      const respone = await AxiosIntance().get('/articles');
      console.log(respone.data);
      if (respone.error == false) {
        setdataNe(respone.data);
        setisLoading(false);
      } else {
        ToastAndroid.show('get data', ToastAndroid.SHORT);
      }
    };
    getNews();

    return () => {};
  }, []);
  useEffect(() => {
    const getDetail = async () => {
      const response = await AxiosIntance().get(
        '/articles/' + params.id + '/detail',
      );

      if (response.error == false) {
        settitle(response.data[0].title);
        setcontent(response.data[0].content);
        setimage(response.data[0].image);
        setisLoading(false);
      }
    };
    getDetail();

    return () => {};
  }, [params.id]);

  return (
    <View style={styles.container1}>
      {isLoading == true ? (
        <View>
          <ActivityIndicator size="large" color="#fff00" />
          <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
            Loading...
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <Pressable onPress={Click}>
            <Image
              style={styles.chuyen}
              source={require('./images/chuyen.png')}
            />
          </Pressable>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image
              style={{
                marginRight: 20,
                marginTop: -15,
                width: 19,
                height: 20,
              }}
              source={require('./images/share.png')}
            />
            <Image
              style={{
                marginRight: 60,
                marginTop: -15,
                width: 3,
                height: 18,
              }}
              source={require('./images/them.png')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.logo}
              source={require('./images/Ellipse.png')}
            />
            <View style={{marginTop: 5}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#000000',
                  marginLeft: 2,
                }}>
                BBC News
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#4E4B66',
                  marginLeft: 2,
                }}>
                14m ago
              </Text>
            </View>
            <Pressable style={styles.buttonSocial}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Popoins',
                  fontStyle: 'normal',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Following
              </Text>
            </Pressable>
          </View>
          <Image style={styles.image} source={{uri: image}} />
          <Text
            style={{
              marginStart: 20,
              marginEnd: 20,
              fontSize: 25,
              fontWeight: '600',
              color: '#000000',
            }}
            numberOfLines={2}>
            {title}
          </Text>
          <Text
            style={{
              width: 350,
              // height: 100,
              marginStart: 20,
              marginEnd: 20,
              fontSize: 16,
              marginTop: 5,
              fontWeight: '400',
              color: '#4E4B66',
            }}
            numberOfLines={4}>
            {content}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: 428,
              height: 78,
              backgroundColor: 'white',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  marginTop: 30,
                  marginLeft: 25,
                }}
                source={require('./images/tym.png')}
              />
              <Text
                style={{
                  marginTop: 28,
                  marginLeft: 6,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                24.5K
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 31}}>
              <Image source={require('./images/chat.png')} />
              <Text
                style={{
                  marginTop: -2,
                  marginLeft: 6,
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                1K
              </Text>
            </View>
            <Image
              style={{
                marginTop: 30,
                marginLeft: 160,
              }}
              source={require('./images/luu.png')}
            />
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 24,
              fontWeight: '600',
              marginLeft: 20,
              marginTop: 10,
            }}>
            Đọc thêm tin tức
          </Text>
          {/* {dataNee.map(item => (
            <ItemListView
              key={item._id}
              dulieu={item}
              navigation={navigation}
            />
          ))} */}
          <FlatList
            data={dataNe}
            renderItem={({item}) => (
              <ItemListView dulieu={item} navigation={navigation} />
            )}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 250,
    margin: 20,
    borderRadius: 8,
  },
  chuyen: {
    marginTop: 25,
    marginLeft: 20,
  },
  logo: {
    width: 40,
    height: 40,
    color: '#FFFFFF',
    marginLeft: 20,
    marginTop: 5,
  },
  buttonSocial: {
    marginTop: 8,
    marginLeft: 142,
    width: 102,
    height: 34,
    backgroundColor: '#1877F2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
