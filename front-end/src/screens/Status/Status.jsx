import { StatusHeader } from 'components/Header';
import { PackageStatus } from 'components/Cards';
import { Divider } from 'components/Common';
import * as S from './styles/Status.styles';

export function Status() {
  return (
    <S.Container>
      <StatusHeader />
      <S.PackageStatusContainer>
        <PackageStatus />
        <Divider />
      </S.PackageStatusContainer>
    </S.Container>
  );
}
