import { useState } from 'react';
import { defaultTo } from 'lodash-es';
import { Col, Container, Image, InputGroup, Form, Row } from 'react-bootstrap';

import icon_dark from '../../resources/logo-dark.svg';

function PcHeader({character}) {
    const [name, setName] = useState(character.name);
    const [player, setPlayer] = useState(character.player);
    const [highScore, setHighScore] = useState(defaultTo(character.highscore, 0));

    function changeHighScore(value)
    {
        if(typeof(value) == 'number') {
            setHighScore(value);
        }
        else {
            setHighScore(Number(value));
        } 
    }

    return (
        <Container fluid className="header-box">
            <Row className="row-eq-height">
                <Col xs="auto"><Image src={icon_dark} fluid className="game-logo" /></Col>
                <Col xs="auto">
                    <Container className="h-100">
                        <Row className="align-text-bottom row-2 fs-2 header-top">MOTHERSHIP®</Row>
                        <Row className="align-text-top row-2 fs-2 header-bottom">CHARACTER PROFILE</Row>
                    </Container>
                </Col>
                <Col>
                    <Container className="h-100">
                        <Row className="align-items-center row-2" style={{marginTop:1}}>
                            <Col xs={8} style={{paddingLeft:0}} >
                                <Form.Control type="text" size="lg" value={name} onChange={e => setName(e.target.value)} />
                            </Col>
                            <Col xs={4}>
                                <h5 style={{marginTop:"0.5rem"}}>{character.class}</h5>
                            </Col>
                        </Row>
                        <Row className="align-items-center row-2">
                            <Col xs={8} className="col-player">
                                <InputGroup>
                                    <InputGroup.Text>Player Name</InputGroup.Text>
                                    <Form.Control type="text" value={player} onChange={e => setPlayer(e.target.value)} />
                                </InputGroup>
                            </Col>
                            <Col xs={4} className="col-highscore">
                                <InputGroup>
                                    <InputGroup.Text>High Score</InputGroup.Text>
                                    <Form.Control type="number" style={{width: "4em"}} value={highScore} onChange={e => changeHighScore(e.target.value)} />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default PcHeader;

