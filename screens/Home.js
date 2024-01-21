import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Tabbar from '../components/Tabbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Tabbar/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  }
});

export default Home;
