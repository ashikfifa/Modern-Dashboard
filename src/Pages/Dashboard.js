import { Col, Row } from "react-bootstrap";
import "./dashboard.scss";
import SubCards from "../Components/SubCard/SubCards";
import ActivityCard from "../Components/activityCard/ActivityCard";
import PersonalCard from "../Components/personalCard/PersonalCard";
import bellIcon from "../Svgs/bell.svg";
import msgIcon from "../Svgs/message.svg";
import ThirdCard from "../Components/thirdCard/ThirdCard";
import FriendsCard from "../Components/friendsCard/FriendsCard";
const Dashboard = () => {
  const messiImg =
    "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0";

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
                          <img className="imgStyle" src={messiImg} />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="skattingCard">
                          <p className="title">
                            Longest Roller-Skatting:2 hours
                          </p>
                          <img className="imgStyle" src={messiImg} />
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
              <div className="thirdCardFlex">
                <div>
                  {" "}
                  <img src={bellIcon} />{" "}
                </div>
                <div>
                  {" "}
                  <img src={msgIcon} />{" "}
                </div>
                <div> Kelsey Miller</div>
                <div>
                  {" "}
                  <img className="imgStyle" src={messiImg} />{" "}
                </div>
              </div>

              <ThirdCard/>

              <p className="title">Friends Activity</p>

              <FriendsCard/>

              <div style={{paddingTop:"4%"}}>
              <FriendsCard/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
