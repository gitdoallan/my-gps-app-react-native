import { Switch } from '@react-native-material/core';
import { useDispatch, useSelector } from 'react-redux';
import { setServiceActivated } from 'redux/slicers';

export function AppConnectionToggleBtn() {
  const { serviceStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <Switch
      value={serviceStatus.activated}
      onValueChange={() => dispatch(setServiceActivated(!serviceStatus.activated))}
    />
  );
}
