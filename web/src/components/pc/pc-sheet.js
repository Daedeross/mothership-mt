import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PcHeader from './pc-header';
import PersonalDetails from '../shared/personal-details';
import PcStats from './pc-stats';

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
                <Col><PcStats character={character} /></Col>
            </Row>
        </Container>
    );
}

export default PcSheet;