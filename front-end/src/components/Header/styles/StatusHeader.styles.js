import styled from 'styled-components';
import { useTheme } from 'hooks';

const theme = useTheme();

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 90px;
  padding: 0 20px;
  background-color: ${theme.topBarBg};
`;

export const BackLink = styled.Text`
  font-size: 22px;
  font-weight: bold;
  width: 65px;
  color: ${theme.topBarLink};
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${theme.topBarLink};
`;

export const RightSide = styled.View`
width: 65px;
`;
