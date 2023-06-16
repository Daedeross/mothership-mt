import { Col, Container, Image, InputGroup, Form, Row } from 'react-bootstrap';

import { actions, selectors } from '../../shared/personal-details/personal-details-slice';
import icon_dark from '../../../resources/logo-dark.png';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';


function PcHeader() {
    const name = useAppSelector(selectors.name);
    const player = useAppSelector(selectors.player);
    const characterClass = useAppSelector(selectors.class);
    const highScore = useAppSelector(selectors.highscore);

    const dispatch = useAppDispatch();

    return (
        <Container fluid className="header-box d-flex pt-2">
            <Row className="row-eq-height flex-grow-1">
                <Col xs="auto"><Image src={icon_dark} fluid className="game-logo" /></Col>
                <Col className="flex-grow-1">
                    <Container fluid className="h-100">
                        <Row className="align-text-bottom row-2 fs-2 d-flex justify-content-between" >
                            <Col>MOTHERSHIP®</Col>
                            <Col className="col-player">
                                <InputGroup>
                                    <InputGroup.Text>Player Name</InputGroup.Text>
                                    <Form.Control type="text" value={player} onChange={e => dispatch(actions.setPlayer(e.target.value))} />
                                </InputGroup>
                            </Col>
                        </Row>
                        
                        <Row className="align-text-top row-2 fs-2 d-flex justify-content-between">
                            <Col xs={8} className="flex-grow-1">CHARACTER PROFILE</Col>
                            <Col xs={4} style={{maxWidth:'6.25em'}}>
                                <InputGroup>
                                    <InputGroup.Text>High Score</InputGroup.Text>
                                    <Form.Control type="number" value={highScore} onChange={e => dispatch(actions.setHighScore(Number(e.target.value)))} />
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

