import { View } from 'react-native';
import { Divider } from 'components/Common';
import * as S from './styles/PackageStatus.styles';

export function PackageStatus() {
  return (
    <View>
      <Divider />
      <S.PackageStatus>
        <View>
          <S.PackageStatusIdText>Pacote ID: XXXXX</S.PackageStatusIdText>
          <S.PackageStatusText>Pendente a sincronizar</S.PackageStatusText>
        </View>
        <View>
          <S.PackageTime>11:32</S.PackageTime>
        </View>
      </S.PackageStatus>
    </View>
  );
}
