export type TUnit = 'px' | '%' | 'vh' | 'vw';
type TNoPXUnit = '%' | 'vh' | 'vw';
export type TPositionProps = number | `${number}${TNoPXUnit}`