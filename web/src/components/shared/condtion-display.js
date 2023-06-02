import { max } from 'lodash-es';
import { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ConditionDisplay({name, current, maximum, reversed=false}) {
    return (
        <Container style={{maxWidth:120}}>
            <Row className="justify-contents-center">
                <span className="text-center">{name}</span></Row>
            <Row className="border border-2 border-dark rounded-pill">
                <Col xs={5} className="condition-text">{current}</Col>
                <Col xs={1} className="condition-split"></Col>
                <Col xs={5} className="condition-text">{maximum}</Col>
            </Row>
            <Row className="condition-label">
                <Col xs={5}>Current</Col>
                <Col xs={7}>{reversed ? 'Minimum' : 'Maximum' }</Col>
            </Row>
        </Container>
    )
}

export default ConditionDisplay;