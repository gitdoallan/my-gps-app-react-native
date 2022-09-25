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

export const HeaderTitle = styled.Text`
  font-size: 22px;
  color: ${theme.topBarText};
`;

export const StatusLink = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.topBarLink};
`;
