import { Col, Row } from "react-bootstrap";
import "./subCards.scss";
const SubCards = () => {
  return (
    <>
      <div className="subCardClass">
        <Row>
          <Col xs={2} sm={2} lg={2} md={2}>
            13 <br />
            Mon
          </Col>
          <Col xs={6} sm={6} lg={6} md={6} >
            <div className="vertical-line">
              Swimming <br />{" "}
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  marginBottom: "2%",
                  borderRadius: "20px",
                }}
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
              />
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  marginBottom: "2%",
                  borderRadius: "20px",
                }}
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
              />
            </div>
          </Col>
          <Col xs={3} sm={3} lg={3} md={3} >
            <button className="joinBtn"> Join </button>
          </Col>

          <Col xs={1} sm={1} lg={1} md={1}></Col>
        </Row>
      </div>
    </>
  );
};

export default SubCards;
