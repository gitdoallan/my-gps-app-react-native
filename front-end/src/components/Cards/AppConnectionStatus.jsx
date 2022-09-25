import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'hooks';
import * as S from './styles/AppConnectionStatus.styles';

export function AppConnectionStatus() {
  const theme = useTheme();
  return (
    <S.AppDetails>
      <Feather name="compass" size={80} color={theme.statusBarBg} />
      <View>
        <S.Title>My GPS - Tracking</S.Title>
        <S.Status>Online</S.Status>
      </View>
    </S.AppDetails>
  );
}
