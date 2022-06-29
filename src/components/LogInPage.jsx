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
            single core processor works with
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
