import { ReactElement } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import PcHeader from '../pc-header/pc-header';
import PersonalDetails from '../../shared/personal-details/personal-details';
import PcStats from '../pc-stats/pc-stats';
import Conditions from '../../shared/conditions/conditions';
import Skills from '../skills/skills';
import Armors from '../../shared/armor/armors';
import Weapons from '../../shared/weapon/weapons';

function PcSheet() : ReactElement {
    return (
        <Container fluid className="m-0">
            <Row>
                <Col>
                    <PcHeader />
                </Col>
            </Row>
            <Row className="mt-1" >
                <Col><PersonalDetails /></Col>
                <Col><PcStats /></Col>
            </Row>
            <Row className="bg-light rounded-4 mt-1 mx-0" style={{marginBottom:12,paddingTop:12}} >
                <Conditions  />
            </Row>
            <Row className="bg-light rounded-4 mt-1 mx-0" style={{marginBottom:12,paddingTop:12}} >
                <Skills />
            </Row>
            <Row className='mt-1 mx-0'>
                <Col className="bg-light rounded-4 me-2" style={{marginBottom:12, paddingTop:12, paddingBottom:6}} >
                    <Armors />
                </Col>
                <Col className="bg-light rounded-4 ms-2" style={{marginBottom:12, paddingTop:12}} >
                    <Weapons />
                </Col>
            </Row>
        </Container>
    );
}

export default PcSheet;