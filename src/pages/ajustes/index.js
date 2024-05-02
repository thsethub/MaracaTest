import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ajustes() {
  return (
    <View style={styles.container}>
      <Text>Página Ajustes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
