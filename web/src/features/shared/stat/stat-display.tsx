import { toUpper } from 'lodash';
import { Button, Form, Stack } from 'react-bootstrap';

import { StatName, makeSelector, actions } from './stats-slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RollMode, selectRollMode } from '../roll/roll-mode-slice';
import { getRollVariant } from '../roll/roll-toggle';

interface Props {
    label?: string;
    name: StatName;
}

const StatDisplay: React.FC<Props> = ({ label, name }) => {
    const value = useAppSelector(makeSelector(name));
    const rollMode = useAppSelector(selectRollMode);
    const dispatch = useAppDispatch();
    const displayName = label ?? toUpper(StatName[name]);

    const valueDisplay = (doRoll: boolean) => {
        if (doRoll) {
            return (
                <Button variant={getRollVariant(rollMode)} className="stat-value d-grid gap-2">{value}</Button>
            );
        } else {
            return (<Form.Control type="number" className="stat-value" value={value} onChange={e => dispatch(actions.setValue({name, value:  Number(e.target.value)}))} />)
        }
    }

    return (
        <Stack gap={1} style={{maxWidth:100}}>
            {valueDisplay(rollMode !== RollMode.None)}
            <div className="text-center align-items-center h5"><span>{displayName}</span></div>
        </Stack>
    );
};

export default StatDisplay;