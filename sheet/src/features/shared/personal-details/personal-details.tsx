import { Container, Form, Row } from 'react-bootstrap';

import { selectors, actions } from './personal-details-slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

function PersonalDetails() {
    const name = useAppSelector(selectors.name)
    const pronouns = useAppSelector(selectors.pronouns);
    const notes = useAppSelector(selectors.notes);

    const dispatch = useAppDispatch();

    return (
        <Container fluid className="personal-details-box">
            <Row className="text-center h5" ><span>PERSONAL DETAILS</span></Row>
            <Row>
                <Form className="mb-1">
                    <Form.Label htmlFor="inputName">Character Name</Form.Label>
                    <Form.Control id="inputName" type="text" aria-describedby="inputName" value={name} onChange={e => dispatch(actions.setName(e.target.value))}></Form.Control>

                    <Form.Label htmlFor="inputPronouns">Pronouns</Form.Label>
                    <Form.Control id="inputPronouns" type="text" aria-describedby="inputPronouns" value={pronouns} onChange={e => dispatch(actions.setPronouns(e.target.value))}></Form.Control>

                    <Form.Label htmlFor="inputNotes">Personal Notes</Form.Label>
                    <Form.Control id="inpueNotes" className="no-resize" as="textarea" rows={4} value={notes} onChange={e => dispatch(actions.setNotes(e.target.value))}></Form.Control>
                </Form>
            </Row>
        </Container>
    )
}

export default PersonalDetails