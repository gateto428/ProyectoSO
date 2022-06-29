import React, { useEffect, useState } from "react";
import {
  Container,
  Div,
  DivClock,
  Img,
  ImgS,
  DivStatus,
  DivCPU,
  DivHeader,
  DivEvents,
  TableC,
  Th,
  Td,
} from "../css/Home.css.js";
import clock from "../img/clock.png";
import cpu from "../img/cpustatus.png";
import Table from "./Table.jsx";
import { connect } from "react-redux";
import { StartSimulator } from "../redux/actions/index.js";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Home = (props) => {
  //elemento.StartSimulator()
  const [elemento, setElemento] = useState({});
  let array = [];
  useEffect(() => {
    props.StartSimulator();
    array = props.arr;
  }, []);

  async function charheM() {
    props.StartSimulator();
    array = props.arr;
    for (let i = 0; i < array.length; i++) {
      setElemento(array[i]);
      console.log(elemento);
      await sleep(1000);
    }

    //console.log(elemento.arr);
  }
  return (
    <Container>
      <Div>
        <DivHeader>
          <DivClock>
            <Img src={clock} alt="Clock_Picture" />
            <label>Clock: {elemento.clock}</label>
          </DivClock>
          <DivEvents>
            <label>Events: </label>
            <p>{elemento.events}</p>
          </DivEvents>
        </DivHeader>
        <div>
          <DivCPU>
            <DivStatus>
              <ImgS src={cpu} alt="cpu_Picture" />
              <label>Cpu State: {elemento.cpu?.status}</label>
            </DivStatus>
            <div>
              <TableC>
                <thead>
                  <tr>
                    <Th>ID</Th>
                    <Th>Life Time</Th>
                    <Th>Next IO</Th>
                    <Th>IO</Th>
                    <Th>STATUS</Th>
                    <Th>QUANTUM</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>{elemento.cpu?.process?.id}</Td>
                    <Td>{elemento.cpu?.process?.lt}</Td>
                    <Td>{elemento.cpu?.process?.nextIO}</Td>
                    <Td>{elemento.cpu?.process?.IO}</Td>
                    <Td>{elemento.cpu?.process?.status}</Td>
                    <Td>{elemento.cpu?.process?.quantum}</Td>
                  </tr>
                </tbody>
              </TableC>
            </div>
          </DivCPU>
          <div>
            <h3>Ready Queue: </h3>
            <Table list={elemento.readyQueue} />
          </div>
          <div>
            <h3>Blocked Queue: </h3>
            <Table list={elemento.blockedQueue} />
          </div>
          <div>
            <h3>Finished Queue: </h3>
            <Table list={elemento.finishedQueue} />
          </div>
        </div>
      </Div>
      <button onClick={charheM}>Start Simulation</button>
    </Container>
  );
};

function mapStateToelemento(state) {
  return {
    arr: state.arr,
  };
}

function mapDispachToelemento(dispatch) {
  return {
    StartSimulator: () => dispatch(StartSimulator()),
  };
}

export default connect(mapStateToelemento, mapDispachToelemento)(Home);
