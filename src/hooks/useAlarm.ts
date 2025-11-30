// hooks/useAlarm.ts
import { Vibration, ToastAndroid, Platform } from 'react-native';

const useAlarm = () => {
  const triggerAlarm = () => {
    Vibration.vibrate([1000, 500, 1000, 500, 1000], false);
    
    // System notification (Android)
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravity(
        '⏰ Timer Complete!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
  };

  const stopAlarm = () => {
    Vibration.cancel();
  };

  return { triggerAlarm, stopAlarm };
};

export default useAlarm;