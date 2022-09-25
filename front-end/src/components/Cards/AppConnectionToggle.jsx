import { useState } from 'react';
import { View } from 'react-native';
import { Switch } from '@react-native-material/core';
import * as S from './styles/AppConnectionToggle.styles';

export function AppConnectionToggle() {
  const [checked, setChecked] = useState(true);
  return (
    <S.Container>
      <View>
        <S.LabelTitle>Status do serviço</S.LabelTitle>
        <S.LabelSubtitle>
          {checked ? 'Serviço ativo' : 'Serviço inativo'}
        </S.LabelSubtitle>
      </View>
      <View>
        <Switch
          value={checked}
          onValueChange={() => setChecked(!checked)}
        />
      </View>
    </S.Container>
  );
}
