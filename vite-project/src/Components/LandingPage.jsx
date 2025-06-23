
import CardSwap, { Card } from './CardSwap'
import Card1 from "../assets/Card1.jpg"
import Card2 from "../assets/Card2.jpg"
import Card3 from "../assets/Card3.gif"
const LandingPage = () => {
  return (
    <div style={{ height: '600px', position: 'relative',marginRight:"30px" }}>
    <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
    >
        <Card>
        <h3 style={{marginLeft:"8px",color:"white",marginTop:"4px",fontSize:"16px" }}>Online Lectures</h3>
        <img src={Card1}  className = "card-image" alt="" />
        </Card>
        <Card>
        <h3  style={{marginLeft:"8px",color:"white",marginTop:"4px",fontSize:"16px" }}>Download Notes</h3>
        <img src={Card2}  className = "card-image"alt="" />
        </Card>
        <Card>
        <h3  style={{marginLeft:"8px",color:"white",marginTop:"4px",fontSize:"16px" }}>Code Editor</h3>
        <img src={Card3} className = "card-image"alt="" />
        </Card>

    </CardSwap>
</div>
  )
}

export default LandingPage
