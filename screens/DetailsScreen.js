import React from 'react';
import { View, Text, Button, StyleSheet,StatusBar } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1f65ff" />
        <Text>Details Screen</Text>
       
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
