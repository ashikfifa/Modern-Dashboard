import { Col, Row } from 'react-bootstrap'
import './subCards.scss'
const SubCards=()=>{
    return(
        <>
        <div className="subCardClass">
<Row>
    <Col lg={2}>
    13 <br/>
    Mon
      
    </Col>
    <Col lg={6}>
        <div className="vertical-line">Swimming <br/> <img
    style={{
        width: "25px",
        height: "25px",
        marginBottom: "2%",
        borderRadius: "20px", // Adjust the border-radius for roundness
    }}
    src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
    />

<img
    style={{
        width: "25px",
        height: "25px",
        marginBottom: "2%",
        borderRadius: "20px", // Adjust the border-radius for roundness
    }}
    src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRdI-Nv-Uy-uBJJkIKQmdWhEFG6oy4lPIoBha2LOaMputUjw5-Ltnn3-SQqhymuDZtcQDaxS0wbUXf2Ko0"
    />
 </div>
    </Col>
    <Col lg={3}>
    <button className='joinBtn'> Join </button>
    </Col>

    <Col lg={1}></Col>
</Row>
            </div>
        </>
    )
}

export default SubCards