import { View } from 'react-native';
import { Divider } from 'components/Common';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import * as S from './styles/PackageStatus.styles';

export function PackageStatus({ id, time }) {
  const { locationsValue } = useSelector((state) => state);
  const pending = locationsValue.offline.find((location) => location.id === id);
  return (
    <View>
      <Divider />
      <S.PackageStatus>
        <View>
          <S.PackageStatusIdText>
            Pacote ID:
            {' '}
            {id}
          </S.PackageStatusIdText>
          <S.PackageStatusText>
            {pending ? 'Pendente Sincronizar' : 'Sincronizado'}
          </S.PackageStatusText>
        </View>
        <View>
          <S.PackageTime>{time}</S.PackageTime>
        </View>
      </S.PackageStatus>
    </View>
  );
}

PackageStatus.propTypes = {
  id: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
};
