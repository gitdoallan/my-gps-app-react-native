import styled from 'styled-components';
import { useTheme } from 'hooks';

const theme = useTheme();

export const Title = styled.Text`
  font-size: 24px;
  margin: 50px 20px 0 20px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 20px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.isSelected ? theme.success : theme.gray)};
  background-color: ${(props) => (props.isSelected ? theme.sucessBg : theme.backgroundColor)};
`;

export const ButtonText = styled.Text`
  font-size: 24px;
`;
