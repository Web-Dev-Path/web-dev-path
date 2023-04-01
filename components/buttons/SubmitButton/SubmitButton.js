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
      // className={
      //   customClassName
      //     ? `${btnStyles.btn} ${btnStyles[customClassName]}`
      //     : btnStyles.btn
      // } NEED TO CHECK IF CUSTOM NAME IS PASSED
      type='submit'
      disabled={disabled}
    >
      {label}
    </S.SubmitButton>
  );
}
