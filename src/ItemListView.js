/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ItemListView = props => {
  const {dulieu, navigation} = props;
  const clickItem = () => {
    console.log(navigation);
    navigation.navigate('NewsDetail', {id: dulieu._id});
  };
  return (
    <TouchableOpacity onPress={clickItem}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: dulieu.image}} />
        <View style={styles.content}>
          <Text
            style={{
              color: '#4E4B66',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontSize: 13,
              fontWeight: '400',
            }}>
            Erours
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 'bold',
              color: '#000000',
            }}
            numberOfLines={1}>
            {dulieu.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '400',
              color: '#000000',
            }}
            numberOfLines={2}>
            {dulieu.content}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('./images/Ellipse.png')} />
            <Text
              style={[
                styles.label,
                {
                  color: '#4E4B66',
                  fontWeight: 'bold',
                  fontSize: 13,
                  fontStyle: 'normal',
                  fontFamily: 'Poppins',
                },
              ]}>
              BBC News
            </Text>
            <Image
              style={{marginLeft: 10}}
              source={require('./images/oclock.png')}
            />
            <Text
              style={[
                styles.label,
                {
                  color: '#4E4B66',
                  fontWeight: '400',
                  fontSize: 13,
                  fontStyle: 'normal',
                  fontFamily: 'Poppins',
                },
              ]}>
              14m ago
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ItemListView;

const styles = StyleSheet.create({
  image: {
    marginLeft: 20,
    width: 96,
    height: 96,
    borderRadius: 10,
  },
  container: {
    marginTop: 20,
    flexDirection: 'row',
  },
  label: {
    marginLeft: 5,
  },
  content: {
    width: Dimensions.get('window').width - 130,
    marginStart: 10,
  },
});
