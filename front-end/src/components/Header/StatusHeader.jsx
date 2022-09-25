import * as S from './styles/StatusHeader.styles';

export function StatusHeader() {
  return (
    <S.Header>
      <S.BackLink>Voltar</S.BackLink>
      <S.Title>Status</S.Title>
      <S.RightSide />
    </S.Header>
  );
}
