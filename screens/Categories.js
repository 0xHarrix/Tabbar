import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Tabbar from '../components/Tabbar';

const Categories = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories</Text>
      <Tabbar/>
    </View>
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

export default Categories;
