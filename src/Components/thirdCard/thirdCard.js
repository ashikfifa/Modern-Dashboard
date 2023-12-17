import { Doughnut } from "react-chartjs-2";
import "./thirdCard.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ThirdCard = () => {
  const data = {
    labels: ["Red", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [80, 20],
        backgroundColor: [
          "rgb(89, 11, 148)",
          "rgb(179, 178, 178)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <>
      <div className="thirdCardStyle">
        <div className="title">Active Calories</div>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default ThirdCard;
