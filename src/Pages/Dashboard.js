import { Col, Row } from "react-bootstrap";
import "./dashboard.scss";
import SubCards from "../Components/SubCard/SubCards";
import ActivityCard from "../Components/activityCard/ActivityCard";
import PersonalCard from "../Components/personalCard/PersonalCard";
const Dashboard = () => {
  return (
    <>
      <div className="" style={{ paddingLeft: "2%" }}>
        <Row>
          <Col lg={9}>
            <div className="cardSecond">
              <p className="title">Popular Activities </p>

              <ActivityCard />

              <div style={{ marginTop: "4%" }}>
                <Row>
                  <Col lg={6}>
                    <p className="title">Weekly Schedule</p>

                    <SubCards />
                    <SubCards />
                    <SubCards />
                  </Col>

                  <Col lg={6}>
                    <p className="title">Personal Bests </p>

                    <PersonalCard />

                    <Row>
                      <Col lg={6}>
                        <div className="longestRunCard">
                          <p className="title">
                            Longest Distance Cycling:4 miles
                          </p>
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "2px",
                              float: "right",
                              marginBottom:"4%"
                            }}
                            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                      <div className="skattingCard">
                          <p className="title">
                            Longest Roller-Skatting:2 hours
                          </p>
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "2px",
                              float: "right",
                              marginBottom:"4%"
                            }}
                            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="thirdCard">
aa
            </div>
             </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
