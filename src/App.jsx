import "./App.css";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import ClockSlogan from "./components/ClockSlogan";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </>
  );
};

export default App;
