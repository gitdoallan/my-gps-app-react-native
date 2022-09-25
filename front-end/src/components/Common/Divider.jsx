import { Divider as MaterialDivider } from '@react-native-material/core';
import { useTheme } from 'hooks';

export function Divider() {
  const theme = useTheme();
  return (
    <MaterialDivider color={theme.divider.color} />
  );
}
