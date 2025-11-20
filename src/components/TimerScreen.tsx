import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TimerScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>25:00</Text>
      <Text style={styles.sessionInfo}>Work Session • Round 1 of 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  timer: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#333',
  },
  sessionInfo: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
});

export default TimerScreen;