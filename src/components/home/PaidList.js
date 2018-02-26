// @flow
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class PaidList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Não há itens pagos</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default PaidList;
