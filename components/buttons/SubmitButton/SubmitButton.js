import S from './styles';

export default function SubmitButton({ customClassName, label, disabled }) {
  return (
    <S.SubmitButton
      $variationType={customClassName}
      type='submit'
      disabled={disabled}
    >
      {label}
    </S.SubmitButton>
  );
}
