import styled from '@emotion/styled';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
`;

export const Description = styled.div`
  margin-left: 10px;
`;

export const Wrap = styled.div`
  border-bottom: 2px solid #2a363b;
  padding-bottom: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const StyledArrow = styled(FaRegArrowAltCircleLeft)`
  margin-right: 5px;
`;
