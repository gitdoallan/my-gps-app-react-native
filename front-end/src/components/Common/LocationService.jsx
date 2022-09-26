import { Text, View } from 'react-native';
import { getTimestamps, dateNowFormatted } from 'utils';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLocationSlice, setPendingLocation, setRemoveFromOffline } from 'redux/slicers';
import { sendLocationAPI } from 'utils/api';

export function LocationService() {
  const [errorMsg, setErrorMsg] = useState('');
  const { serviceStatus, locationsValue } = useSelector((state) => state);
  const dispatch = useDispatch();
  const pendingLocations = locationsValue.offline;

  const sendPendingLocations = async (type) => {
    const cases = {
      true: async () => {
        Promise.all(pendingLocations.map(async (location) => {
          sendLocationAPI(location)
            .then(() => dispatch(setRemoveFromOffline(location)))
            .catch(() => null);
        }));
      },
    };
    return cases[type]() || null;
  };
  sendPendingLocations(serviceStatus.status && serviceStatus.activated);

  const sendLocation = async () => {
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

      const dispatchLocation = async (type) => {
        const cases = {
          true: async () => {
            sendLocationAPI(location)
              .then(() => dispatch(setLocationSlice(location)))
              .catch(() => dispatch(setPendingLocation(location)));
          },
          false: () => dispatch(setPendingLocation(location)),
        };
        return cases[type]();
      };
      dispatchLocation(serviceStatus.status && serviceStatus.activated);
    } catch (error) {
      setErrorMsg('Error getting location', error);
    }
  };

  useEffect(() => {
    sendLocation();
  }, []);

  useEffect(() => {
    console.log(locationsValue);
  }, [locationsValue]);

  return (
    <View>
      {errorMsg && (
      <Text>
        {' '}
        { errorMsg }
        {' '}
      </Text>
      )}
    </View>
  );
}
