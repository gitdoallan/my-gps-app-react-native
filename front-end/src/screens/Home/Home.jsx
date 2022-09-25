import { HomeHeader } from 'components/Header';
import { AppConnectionStatus, AppConnectionToggleSection, CommunicationInterval } from 'components/Cards';
import { Divider } from 'components/Common';
import * as S from './styles/Home.styles';

export function Home() {
  return (
    <S.Container>
      <HomeHeader />
      <AppConnectionStatus />
      <Divider />
      <AppConnectionToggleSection />
      <CommunicationInterval />
    </S.Container>
  );
}
