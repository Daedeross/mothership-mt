import { toUpper } from 'lodash';
import { Button, Form, Stack } from 'react-bootstrap';

import { StatName, makeSelector, actions } from './stats-slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RollMode, selectDisplayType, selectRollMode, toggleRollMode } from '../roll/roll-mode-slice';
import { getRollVariant } from '../roll/roll-toggle';
import { selectId } from '../../../app/token-slice';

const ROLL_MACRO = 'doSuccessRoll';
const LIB_NAMESPACE = 'daedeross.mothership';

interface Props {
    label?: string;
    name: StatName;
}

const modeToString = (mode: RollMode) => {
    switch(mode) {
        case RollMode.Advantage: return "+";
        case RollMode.Disadvantage: return "-";
        default: return "";
    }
}

const StatDisplay: React.FC<Props> = ({ label, name }) => {
    const value = useAppSelector(makeSelector(name));
    const rollMode = useAppSelector(selectRollMode);
    const dispatch = useAppDispatch();
    const displayName = label ?? toUpper(StatName[name]);
    const display = useAppSelector(selectDisplayType);
    const id = useAppSelector(selectId);

    const makeRollLink = () => {
        const args = encodeURIComponent(JSON.stringify({ stat: StatName[name], mode: modeToString(rollMode), output: display, id: id}));
        return `macro://${ROLL_MACRO}@lib:${LIB_NAMESPACE}/none/${id}?cachelib=false&${args}`;
    }

    const valueDisplay = (doRoll: boolean) => {
        if (doRoll) {
            return (
                <Button as='a' variant={getRollVariant(rollMode)} className="stat-value d-grid gap-2"
                        href={makeRollLink()} onClick={e => dispatch(toggleRollMode())}
                        >{value}</Button>
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