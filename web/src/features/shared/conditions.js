import { Fragment } from 'react';
import { Col } from 'react-bootstrap';

import ConditionDisplay from './condtion-display';
import TraumaResponse from './trauma-response';

function Conditions({character}) {
    return (
        <Fragment>
            <Col xs={2}>
                <ConditionDisplay name={"HEALTH"} current={character.currenthealth} limit={character.maxhealth} />
            </Col>
            <Col xs={2}>
                <ConditionDisplay name={"WOUNDS"} current={character.currentwounds} limit={character.maxwounds} />
            </Col>
            <Col xs={2}>
                <ConditionDisplay name={"STRESS"} current={character.currentstress} limit={character.minimumstress} reversed />
            </Col>
            <Col xs={6} className="position-relative" style={{marginTop:-12}}>
                <TraumaResponse header={character.class} text={character.traumaresponse} />
            </Col>
        </Fragment>
    );
}

export default Conditions;