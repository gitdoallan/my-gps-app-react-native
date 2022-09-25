import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import * as S from './styles/AppConnectionStatus.styles';

export function AppConnectionStatus() {
  const theme = useTheme();
  const { serviceStatus } = useSelector((state) => state);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected && state.isInternetReachable);
    });
  }, []);

  return (
    <S.Container>
      <Feather name="compass" size={80} color={theme.statusBarBg} />
      <View>
        <S.Title>My GPS - Tracking</S.Title>
        <S.Status serviceStatus={serviceStatus.status && isConnected}>
          {serviceStatus.status && isConnected ? 'Online' : 'Offline'}
        </S.Status>
      </View>
    </S.Container>
  );
}
