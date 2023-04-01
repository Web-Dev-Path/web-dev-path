// import btnStyles from '@/styles/SubmitButton.module.scss';
import S from './styles';

export default function SubmitButton({ customClassName, label, disabled }) {
  // return (
  //   <S.SubmitButton
  //     className={
  //       customClassName
  //         ? `${btnStyles.btn} ${btnStyles[customClassName]}`
  //         : btnStyles.btn
  //     }
  //     type='submit'
  //     disabled={disabled}
  //   >
  //     {label}
  //   </S.SubmitButton>
  // );

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
