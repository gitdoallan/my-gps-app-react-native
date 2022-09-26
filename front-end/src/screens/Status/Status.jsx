import { StatusHeader } from 'components/Header';
import { PackageStatus } from 'components/Cards';
import { Divider } from 'components/Common';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import * as S from './styles/Status.styles';

export function Status() {
  const { locationsValue } = useSelector((state) => state);
  const value = [...locationsValue.all].reverse().slice(0, 50);

  return (
    <S.Container>
      <StatusHeader />
      <FlatList
        data={value}
        renderItem={(e) => (
          <S.PackageStatusContainer>
            <PackageStatus
              id={e.item.id}
              time={e.item.time}
            />
          </S.PackageStatusContainer>
        )}
      />
      <Divider />
    </S.Container>
  );
}
