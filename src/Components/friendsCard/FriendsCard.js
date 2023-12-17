import './friendsCard.scss'
const FriendsCard=()=>{
    const messiImg =
    "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0";

    return(
        <>
        <div className="friendsCard">
        <img className="imgStyle" src={messiImg} />{" "} <span className='title'>Jane</span> 

        <img
            style={{
              width: "100%",
              height: "70%",
              paddingTop: "2%",
              borderRadius: "10px",
            }}
            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
          />

          <p className='desc'>We completed the 30-Day Runnning Streak Challenge!</p>
        </div>
        </>
    )
}

export default FriendsCard