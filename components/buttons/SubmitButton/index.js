import S from './styles';

export default function SubmitButton({ $buttonType, label, disabled }) {
  return (
    <S.SubmitButton $buttonType={$buttonType} type='submit' disabled={disabled}>
      {label}
    </S.SubmitButton>
  );
}
