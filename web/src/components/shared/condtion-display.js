import { max } from 'lodash-es';
import { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ConditionDisplay({name, current, limit, reversed=false}) {
    const [value, setValue] = useState(current);

    return (
        <Container style={{maxWidth:120}}>
            <Row className="justify-contents-center">
                <span className="text-center">{name}</span></Row>
            <Row className="border border-2 border-dark rounded-pill" style={{backgroundColor:'white'}}>
                <Col xs={5} style={{padding:0}}>
                    <Form.Control type="number" className="condition-entry"
                                  min={reversed ? limit : 0}
                                  max={reversed ? null : limit}
                                  value={value} onChange={e => setValue(Number(e.target.value))}></Form.Control>
                </Col>
                <Col xs={1} className="condition-split"></Col>
                <Col xs={5} className="condition-text">{limit}</Col>
            </Row>
            <Row className="condition-label">
                <Col xs={5}>Current</Col>
                <Col xs={7}>{reversed ? 'Minimum' : 'Maximum' }</Col>
            </Row>
        </Container>
    )
}

export default ConditionDisplay;