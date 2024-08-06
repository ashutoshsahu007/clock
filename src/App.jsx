import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import ClockSlogan from "./components/ClockSlogan";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
};

export default App;
