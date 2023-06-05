import { Fragment } from 'react';
import { Col } from 'react-bootstrap';

import ConditionDisplay from './condtion-display';
//import TraumaResponse from './trauma-response';

 function Conditions() {
    return (
        <Fragment>
            <Col xs={2}>
                <ConditionDisplay name={"health"} />
            </Col>
            <Col xs={2}>
                <ConditionDisplay name={"wounds"} />
            </Col>
            <Col xs={2}>
                <ConditionDisplay name={"stress"} reversed />
            </Col>
            <Col xs={6} className="position-relative" style={{marginTop:-12}}>
                {/* <TraumaResponse header={character.class} text={character.traumaresponse} /> */}
            </Col>
        </Fragment>
    );
}

export default Conditions;