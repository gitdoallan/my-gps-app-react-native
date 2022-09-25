import styled from 'styled-components';
import { useTheme } from 'hooks';

const theme = useTheme();

export const PackageStatus = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 0;
`;

export const PackageStatusIdText = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const PackageStatusText = styled.Text`
  font-size: 18px;
`;

export const PackageTime = styled.Text`
  font-size: 20px;
  color: ${theme.gray};
`;
