import { toUpper } from 'lodash';
import { Form, Stack } from 'react-bootstrap';

import { StatName, makeSelector, actions } from './stats-slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

interface Props {
    label?: string;
    name: StatName;
}

const StatDisplay: React.FC<Props> = ({ label, name }) => {
    const value = useAppSelector(makeSelector(name));
    const dispatch = useAppDispatch();
    const displayName = label ?? toUpper(StatName[name]);

    return (
        <Stack gap={1} style={{maxWidth:100}}>
            <Form.Control type="number" className="stat" value={value} onChange={e => dispatch(actions.setValue({name, value:  Number(e.target.value)}))} />
            <div className="text-center align-items-center h5"><span>{displayName}</span></div>
        </Stack>
    );
};

export default StatDisplay;