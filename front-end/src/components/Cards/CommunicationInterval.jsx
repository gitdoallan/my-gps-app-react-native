import { View } from 'react-native';
import * as S from './styles/CommunicationInterval.styles';

export function CommunicationInterval() {
  return (
    <View>
      <View>
        <S.Title>Intervalo de comunicação</S.Title>
      </View>
      <S.Container>
        <S.Button>
          <S.ButtonText>10s</S.ButtonText>
        </S.Button>
        <S.Button>
          <S.ButtonText>5s</S.ButtonText>
        </S.Button>
        <S.Button>
          <S.ButtonText>3s</S.ButtonText>
        </S.Button>
        <S.Button>
          <S.ButtonText>1s</S.ButtonText>
        </S.Button>
      </S.Container>
    </View>
  );
}
