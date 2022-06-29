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
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
`;

export const Div = styled.div`
    width: 90vw;
    height: 90vh;
    margin: 1em;
    padding: 2em;
    overflow: scroll;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 30px;
    border-style: double;
    color: white;
`;

//DivHeader
export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
`;
export const DivClock = styled.div`
    width: 50vw;
    font-size: 3em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
`;

export const Img = styled.img`
    width: 5vw;
    height: 8vh;
    margin-right: 0.5em; 
`;

//DivEvents
export const DivEvents = styled.div`
    width: 50vw;
    padding: 1em;
    overflow: scroll;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 30px;
    border-style: double;
    color: white;
`;

export const TableC = styled.table`
    border: 2px double white;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const Th = styled.th`
    border: 2px double white;
    padding: 0.5em;
`;

export const Td = styled.td`
    border: 2px double white;
    text-align: center;
`;

export const DivCPU = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
`;

export const DivStatus = styled.div`
    font-size: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 2em;
`;

export const ImgS = styled.img`
    width: 3vw;
    height: 5vh;
    margin-right: 0.5em; 
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

export const ImgB = styled.img`
    width: 5vw;
    height: 8vh;
    margin-left: 1em;
`;