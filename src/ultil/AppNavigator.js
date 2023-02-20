/* eslint-disable eqeqeq */
import {Image} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListView from '../ListView';
import NewsDetail from '../NewsDetail';
import Profile from '../Profile';
import {AppContext} from './AppContext';
import DangNhap from '../DangNhap';
import DangKy from '../DangKy';
import PostNews from '../PostNews';

const Stack = createNativeStackNavigator();
// login, register
const Users = () => {
  return (
    <Stack.Navigator
      initialRouteName="DangNhap"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="DangNhap" component={DangNhap} />
      <Stack.Screen name="DangKy" component={DangKy} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      {/* <Tab.Screen name="ListView" component={ListView}></Tab.Screen> */}
    </Stack.Navigator>
  );
};

const Mains = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListView" component={ListView} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      {/* <Tab.Screen name="ListView" component={ListView}></Tab.Screen> */}
    </Stack.Navigator>
  );
};

//Botton tab
// chứa news, profile, newdatiel
const Tab = createBottomTabNavigator();
const News = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({}) => {
          if (route.name === 'Mains') {
            return <Image source={require('../images/home1.png')} />;
          } else if (route.name === 'PostNews') {
            return <Image source={require('../images/export.png')} />;
          } else if (route.name === 'Profile') {
            return <Image source={require('../images/user.png')} />;
          }
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        //   tab: 'blue',
        headerShown: false,
      })}>
      <Tab.Screen name="Mains" component={Mains} options={{title: 'Home'}} />
      <Tab.Screen
        name="PostNews"
        component={PostNews}
        options={{title: 'Explore'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const {isLogin} = useContext(AppContext);

  return <>{isLogin == false ? <Users /> : <News />}</>;
};

export default AppNavigator;
