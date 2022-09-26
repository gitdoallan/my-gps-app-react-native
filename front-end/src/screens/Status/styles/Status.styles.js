import styled from 'styled-components';
import { useTheme } from 'hooks';

const theme = useTheme();

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.backgroundColor};
`;

export const PackageStatusContainer = styled.View`
  margin: 20px 20px 0 20px;
  background-color: ${theme.backgroundColor};
`;
