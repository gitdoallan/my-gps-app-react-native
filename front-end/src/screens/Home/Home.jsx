import { Text } from 'react-native';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>Olá, bem-vindo</S.HeaderTitle>
        <S.StatusLink>Status</S.StatusLink>
      </S.Header>
    </S.Container>
  )
}
