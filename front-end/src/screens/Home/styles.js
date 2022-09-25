import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 90px;
  padding: 0 20px;
  background-color: ${({theme}) => theme.default.topBarBg};
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  color: ${({theme}) => theme.default.topBarText};
`;

export const StatusLink = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({theme}) => theme.default.topBarLink};
`;
