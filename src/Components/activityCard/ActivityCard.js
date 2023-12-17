import { Col, Row } from "react-bootstrap";
const ActivityCard = () => {
  return (
    <>
      <Row>
        <Col xs={12} lg={3}>
          <img
            style={{
              width: "100%",
              height: "50%",
              marginBottom: "2%",
              borderRadius: "10px",
            }}
            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
          />
          <img
            style={{
              width: "100%",
              height: "50%",
              borderRadius: "10px",
            }}
            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
          />
        </Col>
        <Col xs={12} lg={5}>
          
          <img className="imgMediaQ"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
          />
         
        </Col>
        <Col xs={12} md={4}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "10px" }}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
              />
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
              />
            </div>
          </div>
          <div>
            <img
              style={{
                width: "100%",
                height: "100%",
                marginTop: "2%",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ActivityCard;
