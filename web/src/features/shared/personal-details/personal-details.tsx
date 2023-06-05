import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, Row } from 'react-bootstrap';

import { selectors, setName, setNotes, setPronouns } from './personal-details-slice';
import { useAppDispatch } from '../../../app/hooks';

function PersonalDetails() {
    const name = useSelector(selectors.name)
    const pronouns = useSelector(selectors.pronouns);
    const notes = useSelector(selectors.notes);

    const dispatch = useAppDispatch();

    return (
        <Container fluid className="personal-details-box">
            <Row className="text-center h5" ><span>PERSONAL DETAILS</span></Row>
            <Row>
                <Form className="mb-1">
                    <Form.Label htmlFor="inputName">Character Name</Form.Label>
                    <Form.Control id="inputName" type="text" aria-describedby="inputName" value={name} onChange={e => dispatch(setName(e.target.value))}></Form.Control>

                    <Form.Label htmlFor="inputPronouns">Pronouns</Form.Label>
                    <Form.Control id="inputPronouns" type="text" aria-describedby="inputPronouns" value={pronouns} onChange={e => dispatch(setPronouns(e.target.value))}></Form.Control>

                    <Form.Label htmlFor="inputNotes">Personal Notes</Form.Label>
                    <Form.Control id="inpueNotes" className="no-resize" as="textarea" rows={4} value={notes} onChange={e => dispatch(setNotes(e.target.value))}></Form.Control>
                </Form>
            </Row>
        </Container>
    )
}

export default PersonalDetails