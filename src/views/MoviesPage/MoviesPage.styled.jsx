import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 5px 5px 5px 7px;
  border-radius: 5px;
  background: #fff;
  display: flex;
  font-size: 12px;
`;

export const Input = styled.input`
  margin-right: 0;
  font-size: inherit;
  transition: width 200ms;
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  width: 55px;
  color: #000;
  border: 1px solid #eee;

  &:focus {
    width: 150px;
    outline: none;
    border: 2px solid tomato;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin-left: 0;
  border: none;
  font-size: 1.15em;
  color: #aaa;
  background-color: #fff;
  padding-top: 2px;
  padding-bottom: 2px;
  transition: color 200ms;

  &:hover {
    cursor: pointer;
    outline: none;
    color: tomato;
  }

  &:focus {
    outline: none;
  }
`;
