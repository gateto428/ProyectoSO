import {
  Container,
  DivInformation,
  DivButton,
  Button,
  Img,
  Div,
} from "../css/LogIn.css.js";
import button from "../img/cpu.png";
import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
    <Container>
      <DivInformation>
        <Div>
          <h1>Simulator</h1>
          <p>
            The purpose of this project is to represent a simulation of how a
            single core processor works with. This simulation is executed with
            random parameters, which are generated between one and the maximum
            values expressed below. Maximum simulation time 100 clock cycles
            represented in 100 seconds. Creation of the next process generated
            randomly between 1 and 3 seconds, or clock cycles. The maximum
            lifetime of a spawned process between 1 and 20. the maximum input
            and output time which is a random number generated between 1-4. and
            the maximum entry and exit time which is a random number between 1
            and 10. and the quantum which is 4 for all processes. if you want to
            change the parameters you should use the console version and thus
            you could do a simulation for different parameters. This consists of
            a panel that shows the running process, a section that shows the
            events of the simulation, a table with the processes ready to be
            transferred to the processor, one with the blocked processes and a
            table with the processes that have already completed their life
            cycle
          </p>
        </Div>
      </DivInformation>
      <DivButton>
        <Link to="/home">
          <Button>
            <span>Start</span>
            <Img src={button} alt="img_button" />
          </Button>
        </Link>
      </DivButton>
    </Container>
  );
};

export default LogInPage;
