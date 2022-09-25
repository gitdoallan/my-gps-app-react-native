import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { AppConnectionToggleBtn } from 'components/Buttons/AppConnectionToggleBtn';
import * as S from './styles/AppConnectionToggleSection.styles';

export function AppConnectionToggleSection() {
  const { serviceStatus } = useSelector((state) => state);
  return (
    <S.Container>
      <View>
        <S.LabelTitle>Status do serviço</S.LabelTitle>
        <S.LabelSubtitle>
          {serviceStatus.activated ? 'Serviço ativo' : 'Serviço inativo'}
        </S.LabelSubtitle>
      </View>
      <View>
        <AppConnectionToggleBtn />
      </View>
    </S.Container>
  );
}
