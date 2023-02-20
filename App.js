import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {AppContextProvider} from './src/ultil/AppContext';
import AppNavigator from './src/ultil/AppNavigator';

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer styles={styles.container}>
        <AppNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
