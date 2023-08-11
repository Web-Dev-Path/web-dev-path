import { RowProps } from 'types';
import S from './styles';

export function Row({ customClass, children }: RowProps) {
  return <S.Row>{children}</S.Row>;
}

export function RowAlignLeft({ customClass, children }: RowProps) {
  return <S.RowAlignLeft>{children}</S.RowAlignLeft>;
}
