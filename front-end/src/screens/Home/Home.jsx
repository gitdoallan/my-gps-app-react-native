import * as S from './styles/Home.styles';
import { HomeHeader } from 'components/Header';
import { AppConnectionStatus } from 'components/Cards';
import { Divider } from 'components/Common';

export function Home() {
  return (
    <S.Container>
      <HomeHeader />
      <AppConnectionStatus />
      <Divider />
    </S.Container>
  )
}
