import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'hooks';
import { useSelector } from 'react-redux';
import * as S from './styles/AppConnectionStatus.styles';

export function AppConnectionStatus() {
  const theme = useTheme();
  const { serviceStatus } = useSelector((state) => state);
  return (
    <S.Container>
      <Feather name="compass" size={80} color={theme.statusBarBg} />
      <View>
        <S.Title>My GPS - Tracking</S.Title>
        <S.Status serviceStatus={serviceStatus.status}>
          {serviceStatus.status ? 'Online' : 'Offline'}
        </S.Status>
      </View>
    </S.Container>
  );
}
