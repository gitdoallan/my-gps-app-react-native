import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setServiceStatus } from 'redux/slicers';
import NetInfo from '@react-native-community/netinfo';
import * as S from './styles/AppConnectionStatus.styles';

export function AppConnectionStatus() {
  const theme = useTheme();
  const { serviceStatus } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      dispatch(
        setServiceStatus(
          state.isConnected && state.isInternetReachable && serviceStatus.activated,
        ),
      );
    });
  }, []);

  return (
    <S.Container>
      <Feather name="compass" size={80} color={theme.statusBarBg} />
      <View>
        <S.Title>My GPS - Tracking</S.Title>
        <S.Status serviceStatus={serviceStatus.status && serviceStatus.activated}>
          {serviceStatus.status && serviceStatus.activated ? 'Online' : 'Offline'}
        </S.Status>
      </View>
    </S.Container>
  );
}
