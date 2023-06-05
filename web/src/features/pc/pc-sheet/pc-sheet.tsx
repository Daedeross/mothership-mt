import { ReactElement } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import PcHeader from '../pc-header/pc-header';
import PersonalDetails from '../../shared/personal-details/personal-details';
import PcStats from '../pc-stats/pc-stats';
//import Conditions from '../../shared/conditions';


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
                {/* <Conditions  /> */}
            </Row>
        </Container>
    );
}

export default PcSheet;