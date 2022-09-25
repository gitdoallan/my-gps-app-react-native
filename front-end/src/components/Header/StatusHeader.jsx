import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import * as S from './styles/StatusHeader.styles';

export function StatusHeader() {
  const { navigate } = useNavigation();
  return (
    <S.Header>
      <TouchableOpacity onPress={() => navigate('Home')}>
        <S.BackLink>Voltar</S.BackLink>
      </TouchableOpacity>
      <S.Title>Status</S.Title>
      <S.RightSide />
    </S.Header>
  );
}
