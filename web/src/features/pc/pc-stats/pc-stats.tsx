import { Col, Container, Row } from 'react-bootstrap';

import StatDisplay from '../../shared/stat/stat-display';
import { StatName } from '../../shared/stat/stats-slice';

function PcStats() {
    return (
        <Container style={{paddingLeft:0}} fluid>
            <Row className="bg-light rounded-4" style={{marginBottom:12,paddingTop:12}} >
                <Col xs={3}><StatDisplay name={StatName.strength} /></Col>
                <Col xs={3}><StatDisplay name={StatName.speed} /></Col>
                <Col xs={3}><StatDisplay name={StatName.intellect} /></Col>
                <Col xs={3}><StatDisplay name={StatName.combat} /></Col>
            </Row>
            <Row className="justify-content-center bg-light rounded-4" style={{marginTop:12,paddingTop:12}}>
                <Col xs={3}><StatDisplay name={StatName.sanity} /></Col>
                <Col xs={3}><StatDisplay name={StatName.fear} /></Col>
                <Col xs={3}><StatDisplay name={StatName.body} /></Col>
            </Row>
        </Container>
    );
}

export default PcStats;