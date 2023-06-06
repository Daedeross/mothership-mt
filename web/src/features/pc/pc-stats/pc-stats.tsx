import { Col, Container, Row, InputGroup } from 'react-bootstrap';

import StatDisplay from '../../shared/stat/stat-display';
import { RollToggle } from '../../shared/roll/roll-toggle';
import { StatName } from '../../shared/stat/stats-slice';
import { selectors } from '../../shared/personal-details/personal-details-slice';
import { useAppSelector } from '../../../app/hooks';

function PcStats() {
    const characterClass = useAppSelector(selectors.class);

    return (
        <Container style={{paddingLeft:0}} fluid>
            <Row className="bg-light rounded-4" style={{marginBottom:8}}>
                <div className="d-flex flex-row my-2 align-items-center">
                    <div className="flex-grow-1 pt-1">
                        <h3 className="my-1">{characterClass}</h3>
                    </div>
                    <div>
                        <RollToggle />
                    </div>
                </div>
            </Row>
            <Row className="bg-light rounded-4" style={{marginBottom:8,paddingTop:12}} >
                <Col xs={3}><StatDisplay name={StatName.strength} /></Col>
                <Col xs={3}><StatDisplay name={StatName.speed} /></Col>
                <Col xs={3}><StatDisplay name={StatName.intellect} /></Col>
                <Col xs={3}><StatDisplay name={StatName.combat} /></Col>
            </Row>
            <Row className="justify-content-center bg-light rounded-4" style={{marginTop:8,paddingTop:12}}>
                <Col xs={3}><StatDisplay name={StatName.sanity} /></Col>
                <Col xs={3}><StatDisplay name={StatName.fear} /></Col>
                <Col xs={3}><StatDisplay name={StatName.body} /></Col>
            </Row>
        </Container>
    );
}

export default PcStats;