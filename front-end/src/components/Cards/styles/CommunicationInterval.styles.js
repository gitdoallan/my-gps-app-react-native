import styled from 'styled-components';

export const Title = styled.Text`
  font-size: 28px;
  margin: 50px 20px 0 20px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const ButtonText = styled.Text`
  font-size: 26px;
`;
