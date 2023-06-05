import { Col, Container, Image, InputGroup, Form, Row } from 'react-bootstrap';

import { selectors, setClass, setHighScore, setName, setPlayer } from './header-slice';
import icon_dark from '../../../resources/logo-dark.png';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';


function PcHeader() {
    const name = useAppSelector(selectors.name);
    const player = useAppSelector(selectors.player);
    const characterClass = useAppSelector(selectors.class);
    const highScore = useAppSelector(selectors.highscore);

    const dispatch = useAppDispatch();

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
                                <Form.Control type="text" size="lg" value={name} onChange={e => dispatch(setName(e.target.value))} />
                            </Col>
                            <Col xs={4}>
                                <h5 style={{marginTop:"0.5rem"}}>{characterClass}</h5>
                            </Col>
                        </Row>
                        <Row className="align-items-center row-2">
                            <Col xs={8} className="col-player">
                                <InputGroup>
                                    <InputGroup.Text>Player Name</InputGroup.Text>
                                    <Form.Control type="text" value={player} onChange={e => dispatch(setPlayer(e.target.value))} />
                                </InputGroup>
                            </Col>
                            <Col xs={4} className="col-highscore">
                                <InputGroup>
                                    <InputGroup.Text>High Score</InputGroup.Text>
                                    <Form.Control type="number" style={{width: "4em"}} value={highScore} onChange={e => dispatch(setHighScore(Number(e.target.value)))} />
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

