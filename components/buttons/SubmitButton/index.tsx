import S from './styles';

interface ButtonProps {
  label: string;
  disabled: boolean;
}

export function SubmitButton({ label, disabled }: ButtonProps) {
  return (
    <S.SubmitButton type='submit' disabled={disabled}>
      {label}
    </S.SubmitButton>
  );
}

export function NewsLetterSubmitButton({ label, disabled }: ButtonProps) {
  return (
    <S.NewsLetterSubmitButton type='submit' disabled={disabled}>
      {label}
    </S.NewsLetterSubmitButton>
  );
}
