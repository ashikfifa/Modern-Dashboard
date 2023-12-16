import { Col, Row } from "react-bootstrap";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Row>
        <Col lg={2} xs={2} sm={2}>
          <Sidebar />
        </Col>
        <Col lg={10} xs={10} sm={10}>
          {" "}
          <Dashboard />
        </Col>
      </Row>
    </div>
  );
}

export default App;
