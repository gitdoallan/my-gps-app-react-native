import styled from 'styled-components';
import { useTheme } from 'hooks';

const theme = useTheme();

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.backgroundColor};
`;
