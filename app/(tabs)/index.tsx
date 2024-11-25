import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello gaisss</Text>
      <Text style={styles.text}>Fakultas Sains dan Teknologi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2B48C',
  },
  text: {
    fontSize: 30,
    color: '#333'
  }
});

export default App;