
import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ListItem = styled.div`
width: 400px;
display: flex;
flex-direction: column;

background: #263038;
border: solid 2px gray;
padding: 5px;
box-shadow: 5px 5px 5px #263038;
border-radius: 5px;
transition: all .25s ease-in-out;

overflow: hidden;
position: relative;
`;

export const Image = styled.img`

    width: 100%;
    height: 350px;
    object-fit: cover;
    float: left;    
    filter: grayscale(100%);
    transition: transform .25s ease-in-out;

    &:hover{
      transform: scale(1.03);
      cursor: zoom-in;
      filter: grayscale(0);
    }
`;