import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PcHeader from './pc-header';
import PersonalDetails from '../shared/personal-details';

function PcSheet({ character }) {
    return (
        <Container fluid className="g-1">
            <Row>
                <Col>
                    <PcHeader character={character} />
                </Col>
            </Row>
            <Row className="mt-1" >
                <Col><PersonalDetails character={character} /></Col>
                <Col>Stats</Col>
            </Row>
        </Container>
    );
}

export default PcSheet;