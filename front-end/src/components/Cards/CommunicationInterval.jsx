import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setServiceInterval } from 'redux/slicers';
import * as S from './styles/CommunicationInterval.styles';

export function CommunicationInterval() {
  const { serviceInterval } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <View>
      <View>
        <S.Title>Intervalo de comunicação</S.Title>
      </View>
      <S.Container>
        <S.Button
          isSelected={serviceInterval === 10000}
          onPress={() => dispatch(setServiceInterval(10000))}
        >
          <S.ButtonText>10s</S.ButtonText>
        </S.Button>
        <S.Button
          isSelected={serviceInterval === 5000}
          onPress={() => dispatch(setServiceInterval(5000))}
        >
          <S.ButtonText>5s</S.ButtonText>
        </S.Button>
        <S.Button
          isSelected={serviceInterval === 3000}
          onPress={() => dispatch(setServiceInterval(3000))}
        >
          <S.ButtonText>3s</S.ButtonText>
        </S.Button>
        <S.Button
          isSelected={serviceInterval === 1000}
          onPress={() => dispatch(setServiceInterval(1000))}
        >
          <S.ButtonText>1s</S.ButtonText>
        </S.Button>
      </S.Container>
    </View>
  );
}
