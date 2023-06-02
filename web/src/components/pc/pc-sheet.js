import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PcHeader from './pc-header';
import PersonalDetails from '../shared/personal-details';
import PcStats from './pc-stats';
import Conditions from '../shared/conditions';

function PcSheet({ character }) {
    return (
        <Container fluid className="m-0">
            <Row>
                <Col>
                    <PcHeader character={character} />
                </Col>
            </Row>
            <Row className="mt-1" >
                <Col><PersonalDetails character={character} /></Col>
                <Col><PcStats character={character} /></Col>
            </Row>
            <Row className="bg-light rounded-4 mt-1 mx-0" style={{marginBottom:12,paddingTop:12}} >
                <Conditions character={character} />
            </Row>
        </Container>
    );
}

export default PcSheet;