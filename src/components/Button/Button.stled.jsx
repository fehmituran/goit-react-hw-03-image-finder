import styled from 'styled-components';

export const LoadBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  margin: 5px;
  height: 40px;
  border: solid 2px #fff;
  background-color: #263038;
  color: #fff;
  cursor: pointer;
  transition: all .25s ease-in-out;

  &:hover {
      background-color: #ffffffff;
      color: #263038;
      border: solid 2px gray;
    }
`;
