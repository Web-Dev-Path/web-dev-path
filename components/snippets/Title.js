// import styles from '@/styles/Title.module.scss';
import styled from 'styled-components';

export const TitleStyle = styled.h2`
  color: red;
`;

const Title = ({ title }) => {
  return (
    <div>
      <TitleStyle>{title}</TitleStyle>
    </div>
  );
};

export default Title;

// const Title = ({ title, customClass }) => {
//   return (
//     <h2
//       className={
//         customClass ? `${styles.title} ${styles[customClass]}` : styles.title
//       }
//     >
//       {title}
//     </h2>
//   );
// };

// export default Title;
