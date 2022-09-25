import styled from 'styled-components';
import { useTheme } from 'hooks';

const theme = useTheme();

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 30px 20px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 500;
  margin: 5px 20px;
  color: ${theme.primary};
`;

export const Status = styled.Text`
  font-size: 22px;
  font-style: italic;
  color: green;
  margin-left: 20px;
`;
