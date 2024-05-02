import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Controle() {
  return (
    <View style={styles.container}>
      <Text>Página Controle</Text>
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
