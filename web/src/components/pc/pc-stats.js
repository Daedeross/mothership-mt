import { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StatDisplay from '../shared/stat-display';

function PcStats({character}) {
    return (
        <Container style={{paddingLeft:0}} fluid>
            <Row className="bg-light rounded-4" style={{marginBottom:12,paddingTop:12}} >
                <Col xs={3}><StatDisplay name={"STRENGTH"} value={character.strength} /></Col>
                <Col xs={3}><StatDisplay name={"SPEED"} value={character.speed} /></Col>
                <Col xs={3}><StatDisplay name={"INTELLECT"} value={character.intellect} /></Col>
                <Col xs={3}><StatDisplay name={"COMBAT"} value={character.combat} /></Col>
            </Row>
            <Row className="justify-content-center bg-light rounded-4" style={{marginTop:12,paddingTop:12}}>
                <Col xs={3}><StatDisplay name={"SANITY"} value={character.sanity} /></Col>
                <Col xs={3}><StatDisplay name={"FEAR"} value={character.fear} /></Col>
                <Col xs={3}><StatDisplay name={"BODY"} value={character.body} /></Col>
            </Row>
        </Container>
    );
}

export default PcStats;