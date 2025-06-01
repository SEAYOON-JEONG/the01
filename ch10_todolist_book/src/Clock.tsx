import { useEffect, useState } from "react"
import { Button, Row, Col, Container } from 'react-bootstrap';

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalid = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalid);
        }
    }, []);
    
    return(
        <div className="clock">
           <Container fluid className="mt-5" style={{ maxWidth: '1200px' }}>
                {/* <h6>현재시간 : {time.toLocaleTimeString()}</h6>       */}
                <Row className="justify-content-center mt-4">
                    <Col xs={10} md={8} lg={6}>
                        <div className="border p-3 rounded">
                            <h4>날씨 예보</h4>
                            <p>현재 날씨: 맑음, 25°C</p>
                            <h4>현재 시간</h4>
                            <p>{new Date().toLocaleTimeString()}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Clock;