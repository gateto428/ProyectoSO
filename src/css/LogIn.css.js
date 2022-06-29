import styled from 'styled-components';
import img from '../img/background.jpeg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    flex-wrap: nowrap;
`;

export const DivInformation = styled.div`   
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
`;

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
`;


export const Div = styled.div`
    width: 50vw;
    height: 50vh;
    margin-left: 2em;
    text-align: justify;
    padding: 3em;
    color: white;
    font-size: 1em;
    overflow: scroll;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 30px;
    border-style: double;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: 3em;
    font-size: 2em;
    padding: 0.4em; 
    border-radius: 40px;
    border-style: double;
    background-color: #c73a75;
    color: white;
    &:hover {
        color:#c73a75;
        cursor: pointer;
        background-color: white;
    };
`;

export const Img = styled.img`
    width: 5vw;
    height: 8vh;
    margin-left: 1em;
`;