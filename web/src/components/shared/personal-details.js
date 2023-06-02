import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function PersonalDetails({character}) {
    const [name, setName] = useState(character.name);
    const [pronouns, setPronouns] = useState(character.pronouns);
    const [notes, setNotes] = useState(character.notes);

    return (
        <Container fluid className="personal-details-box">
            <Row className="text-center h5" ><span>PERSONAL DETAILS</span></Row>
            <Row>
                <Form className="mb-1">
                    <Form.Label htmlFor="inputName">Character Name</Form.Label>
                    <Form.Control type="text" aria-describedby="inputName" value={name} onChange={e => setName(e.target.value)}></Form.Control>

                    <Form.Label htmlFor="inputPronouns">Pronouns</Form.Label>
                    <Form.Control type="text" aria-describedby="inputPronouns" value={pronouns} onChange={e => setPronouns(e.target.value)}></Form.Control>

                    <Form.Label htmlFor="inputNotes">Personal Notes</Form.Label>
                    <Form.Control className="no-resize" rows="4" as="textarea" aria-describedby="inputNotes" value={notes} onChange={e => setNotes(e.target.value)}></Form.Control>
                </Form>
            </Row>
        </Container>
    )
}

export default PersonalDetails