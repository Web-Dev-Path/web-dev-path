import S from './styles';

export function SubmitButton({ label, disabled }) { 
  return (
    <S.SubmitButton type='submit' disabled={disabled}>
      {label}
    </S.SubmitButton>
  );
}

export function NewsLetterSubmitButton({ label, disabled }) {
  return (
    <S.NewsLetterSubmitButton type='submit' disabled={disabled}>
      {label}
    </S.NewsLetterSubmitButton>
  );
}
