import { useState } from 'react';
import { Form, Stack } from "react-bootstrap";

function StatDisplay({name, value}) {
    const [val, setValue] = useState(value);

    return (
        <Stack gap={1} style={{maxWidth:100}}>
            <Form.Control type="number" className="stat" value={val} onChange={e => setValue(Number(e.target.value))} />
            <div className="text-center align-items-center h5"><span>{name}</span></div>
        </Stack>
    );
}

export default StatDisplay;