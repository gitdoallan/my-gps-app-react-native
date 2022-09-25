import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles/HomeHeader.styles';

export function HomeHeader() {
  const { navigate } = useNavigation();
  return (
    <S.Header>
      <S.HeaderTitle>Olá, bem-vindo</S.HeaderTitle>
      <TouchableOpacity onPress={() => navigate('Status')}>
        <S.StatusLink>Status</S.StatusLink>
      </TouchableOpacity>
    </S.Header>
  );
}
