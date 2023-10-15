import styled from 'styled-components';

export const Circle = styled.button`
    background-color: rgb(51, 46, 46);
    display: flex;
    border-radius: 50%;
    border: 1px solid white;
    cursor: pointer;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    img {
        width: 15px;
        height: 15px;
    }
    &:focus {
        outline: none;
        border-color: black;
      }
    &:hover {
        border: 1px solid rgb(45, 42, 30);
    }
`