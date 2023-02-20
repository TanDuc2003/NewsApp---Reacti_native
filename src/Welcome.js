/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          marginTop: 50,
          position: 'absolute',
        }}
        source={require('./images/jun.png')}
      />
      <Pressable style={styles.sign}>
        <Text style={styles.text}>Sign up</Text>
      </Pressable>
      <Pressable style={styles.sign1}>
        <Text style={[styles.text, {color: '#FF5E00', fontWeight: '700'}]}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginStart: 25,
    // marginEnd: 25,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  sign: {
    width: 343,
    height: 50,
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 590,
    position: 'absolute',
  },
  sign1: {
    width: 343,
    height: 50,
    backgroundColor: '',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 655,
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#FF5E00',
  },
  text: {
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'Klarna Text',
    color: '#FFFFFF',
    fontStyle: 'normal',
  },
});
