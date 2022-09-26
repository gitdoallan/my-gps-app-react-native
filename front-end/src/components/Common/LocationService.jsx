import { View, Alert } from 'react-native';
import { getTimestamps, dateNowFormatted } from 'utils';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocationSlice, setPendingLocation, setRemoveFromOffline } from 'redux/slicers';
import { sendLocationAPI } from 'utils/api';

export function LocationService() {
  const [errorMsg, setErrorMsg] = useState('');
  const { serviceStatus, locationsValue, serviceInterval } = useSelector((state) => state);
  const dispatch = useDispatch();

  const sendPendingLocations = async (pending) => {
    Promise.all(pending.map(async (location) => {
      sendLocationAPI(location)
        .then((res) => {
          if (res.status) {
            dispatch(setRemoveFromOffline(location.id));
          }
        });
    }));
  };

  const sendLocation = async (isAppOnline) => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync({});
      const { latitude, longitude, speed } = coords;

      const location = {
        id: getTimestamps(),
        latitude,
        longitude,
        speed,
        time: dateNowFormatted(),
      };

      const dispatchLocation = async () => {
        const cases = {
          true: async () => {
            sendLocationAPI(location)
              .then((res) => {
                if (res.status) {
                  return dispatch(setLocationSlice(location));
                } return dispatch(setPendingLocation(location));
              })
              .catch(() => dispatch(setPendingLocation(location)));
          },
          false: () => dispatch(setPendingLocation(location)),
        };
        return cases[isAppOnline]();
      };
      dispatchLocation();
    } catch (error) {
      setErrorMsg('Error getting location', error);
    }
  };

  useEffect(() => {
    const arr = [serviceStatus.status, serviceStatus.activated];
    const isAppOnline = arr.every((item) => item === true);

    const interval = setInterval(() => {
      sendLocation(isAppOnline);
      if (locationsValue.offline.length > 0 && isAppOnline) {
        sendPendingLocations(locationsValue.offline);
      }
    }, serviceInterval);
    return () => clearInterval(interval);
  }, [serviceStatus, serviceInterval, locationsValue.offline]);

  return (
    <View>
      {errorMsg && (
        Alert.alert('Error', errorMsg)
      )}
    </View>
  );
}
