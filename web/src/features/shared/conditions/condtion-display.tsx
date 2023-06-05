import { Col, Container, Form, Row } from 'react-bootstrap';
import { defaultTo, toUpper } from 'lodash';

import { selectCurrentFactory, selectMaxFactory, selectMinFactory, setCurrent } from './conditions-slices';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

interface Props {
    name: string;
    label?: string;
    reversed?: boolean;
}

const ConditionDisplay: React.FC<Props> = ({ name, label = null, reversed = false }) => {
    const displayName = defaultTo(label, toUpper(name));
    const current = useAppSelector(selectCurrentFactory(name));
    const max = useAppSelector(selectMaxFactory(name));
    const min = useAppSelector(selectMinFactory(name));
    const dispatch = useAppDispatch();

    const handleChange = (value: string) => {
        dispatch(setCurrent({ key: name, value: Number(value)}))
    }

    return (
        <Container style={{ maxWidth: 120 }}>
            <Row className="justify-contents-center">
                <span className="text-center">{displayName}</span></Row>
            <Row className="border border-2 border-dark rounded-pill" style={{ backgroundColor: 'white' }}>
                <Col xs={5} style={{ padding: 0 }}>
                    <Form.Control type="number" className="condition-entry"
                        min={min}
                        max={max}
                        value={current} onChange={e => handleChange(e.target.value)}></Form.Control>
                </Col>
                <Col xs={1} className="condition-split"></Col>
                <Col xs={5} className="condition-limit">{reversed ? min : max}</Col>
            </Row>
            <Row className="condition-label">
                <Col xs={5}>Current</Col>
                <Col xs={7}>{reversed ? 'Minimum' : 'Maximum'}</Col>
            </Row>
        </Container>
    )
}

export default ConditionDisplay;