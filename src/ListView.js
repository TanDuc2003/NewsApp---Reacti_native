/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  ToastAndroid,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemListView from './ItemListView';
import AxiosIntance from './ultil/AxiosIntance';

const ListView = props => {
  const [isSearch, setisSearch] = useState('');
  const {navigation} = props;

  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const keySearch = value => setisSearch(value);

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

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image style={styles.image} source={require('./images/kar.png')} />
        <Image
          style={{marginTop: 30, marginRight: 31, width: 18, height: 21.5}}
          source={require('./images/chuong.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 16,
            fontStyle: 'normal',
            color: '#000000',
            fontWeight: 'bold',
            marginTop: 42,
            marginLeft: 24,
          }}>
          Latest
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '400',
            color: '#4E4B66',
            marginTop: 45,
            marginRight: 24,
          }}>
          See all
        </Text>
      </View>
      <TextInput
        style={{
          width: 350,
          height: 48,
          display: 'flex',
          marginStart: 20,
          marginEnd: 20,
          padding: 10,
          marginTop: 10,
          borderWidth: 1,
          borderColor: '#4E4B66',
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
        }}
        placeholder="Search"
        value={isSearch}
        onChangeText={keySearch}
      />
      <Image
        style={{
          position: 'absolute',
          marginTop: 147,
          marginLeft: 335,
        }}
        source={require('./images/search.png')}
      />
      <View style={styles.container}>
        {isLoading == true ? (
          <View>
            <ActivityIndicator size="large" color="#fff00" />
            <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
              Loading...
            </Text>
          </View>
        ) : (
          <FlatList
            data={dataNe.filter(user => user.title.search(isSearch) > -1)}
            renderItem={({item}) => (
              <ItemListView dulieu={item} navigation={navigation} />
            )}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  image: {
    width: 99,
    height: 30,
    marginTop: 30,
    marginLeft: 24,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
