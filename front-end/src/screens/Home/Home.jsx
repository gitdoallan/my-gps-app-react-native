import { HomeHeader } from 'components/Header';
import { AppConnectionStatus, AppConnectionToggle } from 'components/Cards';
import { Divider } from 'components/Common';
import * as S from './styles/Home.styles';

export function Home() {
  return (
    <S.Container>
      <HomeHeader />
      <AppConnectionStatus />
      <Divider />
      <AppConnectionToggle />
    </S.Container>
  );
}
