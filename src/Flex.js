import {StyleSheet, View} from 'react-native';
import React from 'react';

const Flex = () => {
  return (
    <View style={styleFlex.container}>
      <View style={styleFlex.view1} />
      <View style={styleFlex.view2} />
      <View style={styleFlex.view3} />
      <View style={styleFlex.view4} />
    </View>
  );
};

export default Flex;

const styleFlex = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  view1: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
  view2: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    backgroundColor: 'pink',
  },
  view3: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  view4: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});
