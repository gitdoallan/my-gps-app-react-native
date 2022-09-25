import { Text } from 'react-native';
import { getTimestamps } from 'utils';

export function GetLocation() {
  return (
    <Text>{getTimestamps()}</Text>
  );
}
