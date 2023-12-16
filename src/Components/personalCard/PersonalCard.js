import "./personalCard.scss";
import runIcon from "../../Svgs/run.svg";
const PersonalCard = () => {
  return (
    <>
      <div className="cardPersonalStyle">
        <div className="topMar">
          <div className="textImg">
            <p>Fastest 5K Run :22 min</p>
            <img src={runIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalCard;
