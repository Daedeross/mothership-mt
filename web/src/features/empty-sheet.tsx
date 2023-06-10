import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';

function EmptySheet() {
    return (
        <Container fluid>
            <Row className="align-items-center vh-100">
                <Col>
                    <Alert variant="warning">Please select a token you own to display its sheet.</Alert>
                </Col>
            </Row>
        </Container>
    );
}

export default EmptySheet;