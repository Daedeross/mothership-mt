import { Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import ConditionDisplay from './condtion-display';

function Conditions({character}) {
    return (
        <Fragment>
            <Col xs={3}>
                <ConditionDisplay name={"HEALTH"} current={character.currenthealth} maximum={character.maxhealth} />
            </Col>
            <Col xs={3}>
                <ConditionDisplay name={"WOUNDS"} current={character.currentwounds} maximum={character.maxwounds} />
            </Col>
            <Col xs={3}>
                <ConditionDisplay name={"STRESS"} current={character.currentstress} maximum={character.minimumstress} reversed />
            </Col>
            <Col xs={3}>
                <span>TODO: Trauma Response</span>
            </Col>
        </Fragment>
    );
}

export default Conditions;